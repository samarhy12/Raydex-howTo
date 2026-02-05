import os
from datetime import datetime, timedelta
from functools import wraps
from flask import Flask, request, jsonify, send_from_directory, render_template, redirect, url_for, session, make_response
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
import json
import jwt

# Import from the original backend file
import sys
sys.path.insert(0, '/mnt/user-data/uploads')

# ==================== Flask App Configuration ====================

app = Flask(__name__, template_folder='templates', static_folder='static')
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev-secret-key-change-in-production')
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///raydex.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = 'static/uploads'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

# Enhanced CORS configuration
CORS(app, 
     supports_credentials=True,
     origins=["*"],
     allow_headers=["Content-Type", "Authorization"],
     methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"])

db = SQLAlchemy(app)
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'webp'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# ==================== Database Models ====================

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(20), default='user')
    avatar = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    question_requests = db.relationship('QuestionRequest', backref='user', lazy=True, cascade='all, delete-orphan')
    comments = db.relationship('Comment', backref='user', lazy=True, cascade='all, delete-orphan')
    
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)
    
    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
    
    def generate_token(self):
        payload = {
            'user_id': self.id,
            'email': self.email,
            'role': self.role,
            'exp': datetime.utcnow() + timedelta(days=7)
        }
        return jwt.encode(payload, app.config['SECRET_KEY'], algorithm='HS256')
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'role': self.role,
            'avatar': self.avatar,
            'joinedAt': self.created_at.isoformat()
        }

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    subtitle = db.Column(db.String(300), nullable=True)
    author = db.Column(db.String(100), default='Agyarey Raphael')
    content = db.Column(db.Text, nullable=False)
    views = db.Column(db.Integer, default=0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    comments = db.relationship('Comment', backref='post', lazy=True, cascade='all, delete-orphan')
    
    def get_content(self):
        try:
            return json.loads(self.content)
        except:
            return []
    
    def set_content(self, content_list):
        self.content = json.dumps(content_list)
    
    def increment_views(self):
        self.views += 1
        db.session.commit()
    
    def to_dict(self, include_content=True):
        data = {
            'id': self.id,
            'title': self.title,
            'subtitle': self.subtitle,
            'author': self.author,
            'views': self.views,
            'created_at': self.created_at.isoformat(),
            'updated_at': self.updated_at.isoformat(),
        }
        if include_content:
            data['content'] = self.get_content()
        return data

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    comment = db.Column(db.Text, nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'comment': self.comment,
            'postId': self.post_id,
            'created_at': self.created_at.isoformat()
        }

class QuestionRequest(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    category = db.Column(db.String(50), nullable=False)
    priority = db.Column(db.String(20), default='medium')
    description = db.Column(db.Text, nullable=False)
    status = db.Column(db.String(20), default='pending')
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    article_id = db.Column(db.Integer, db.ForeignKey('post.id'), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    estimated_delivery = db.Column(db.DateTime, nullable=True)
    completed_at = db.Column(db.DateTime, nullable=True)
    
    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'category': self.category,
            'priority': self.priority,
            'description': self.description,
            'status': self.status,
            'userId': self.user_id,
            'userName': self.user.name,
            'userEmail': self.user.email,
            'articleId': self.article_id,
            'createdAt': self.created_at.isoformat(),
            'estimatedDelivery': self.estimated_delivery.isoformat() if self.estimated_delivery else None,
            'completedAt': self.completed_at.isoformat() if self.completed_at else None
        }

# ==================== Auth Decorators ====================

def get_current_user():
    """Get current user from token in localStorage (passed via header)"""
    token = None
    if 'Authorization' in request.headers:
        try:
            token = request.headers['Authorization'].split(' ')[1]
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
            return User.query.get(data['user_id'])
        except:
            return None
    return None

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        # For page routes, we can't check token on server (it's in localStorage)
        # So we always render the page and let client-side JS handle auth
        # The template will check localStorage and redirect if not authenticated
        return f(None, *args, **kwargs)  # Pass None as current_user
    return decorated

def admin_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        # Same as token_required - client-side will check role
        return f(None, *args, **kwargs)
    return decorated

# ==================== HTML Template Routes ====================

@app.route('/')
def home_page():
    return render_template('home.html')

@app.route('/login')
def login_page():
    # Don't check auth here - client-side will handle it
    return render_template('login.html')

@app.route('/register')
def register_page():
    # Don't check auth here - client-side will handle it
    return render_template('register.html')

@app.route('/post/<int:id>')
def post_detail_page(id):
    post = Post.query.get_or_404(id)
    post.increment_views()
    return render_template('post_detail.html', post=post)

# ==================== SEO Routes ====================

@app.route('/sitemap.xml')
def sitemap():
    """Generate dynamic sitemap for SEO"""
    from datetime import datetime
    
    pages = []
    
    # Homepage
    pages.append({
        'loc': 'https://howto.raydexhub.com/',
        'lastmod': datetime.utcnow().strftime('%Y-%m-%d'),
        'changefreq': 'daily',
        'priority': '1.0'
    })
    
    # All published posts
    posts = Post.query.order_by(Post.updated_at.desc()).all()
    for post in posts:
        pages.append({
            'loc': f'https://howto.raydexhub.com/post/{post.id}',
            'lastmod': post.updated_at.strftime('%Y-%m-%d'),
            'changefreq': 'weekly',
            'priority': '0.9'
        })
    
    # Generate XML
    xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    
    for page in pages:
        xml += '  <url>\n'
        xml += f'    <loc>{page["loc"]}</loc>\n'
        xml += f'    <lastmod>{page["lastmod"]}</lastmod>\n'
        xml += f'    <changefreq>{page["changefreq"]}</changefreq>\n'
        xml += f'    <priority>{page["priority"]}</priority>\n'
        xml += '  </url>\n'
    
    xml += '</urlset>'
    
    response = make_response(xml)
    response.headers['Content-Type'] = 'application/xml'
    return response

@app.route('/robots.txt')
def robots():
    """Generate robots.txt for SEO"""
    robots_txt = '''User-agent: *
Allow: /
Disallow: /admin/
Disallow: /dashboard
Disallow: /profile
Disallow: /request
Disallow: /login
Disallow: /register

Sitemap: https://howto.raydexhub.com/sitemap.xml

Crawl-delay: 1

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /
'''
    
    response = make_response(robots_txt)
    response.headers['Content-Type'] = 'text/plain'
    return response

@app.route('/dashboard')
@token_required
def dashboard_page(current_user):
    return render_template('dashboard.html')

@app.route('/profile')
@token_required
def profile_page(current_user):
    return render_template('profile.html')

@app.route('/request')
@token_required
def request_page(current_user):
    return render_template('request.html')

@app.route('/admin/dashboard')
@admin_required
def admin_dashboard_page(current_user):
    return render_template('admin_dashboard.html')

@app.route('/admin/create')
@admin_required
def admin_create_page(current_user):
    return render_template('admin_create.html')

@app.route('/admin/edit/<int:id>')
@admin_required
def admin_edit_page(current_user, id):
    post = Post.query.get_or_404(id)
    return render_template('admin_edit.html', post=post)

@app.route('/admin/requests')
@admin_required
def admin_requests_page(current_user):
    return render_template('admin_requests.html')

# ==================== All API Routes from Original Backend ====================

# Auth Routes
@app.route('/api/auth/register', methods=['POST', 'OPTIONS'])
def register():
    if request.method == 'OPTIONS':
        return '', 204
    
    try:
        data = request.get_json(force=True)
        if not data:
            return jsonify({'success': False, 'error': 'No data provided'}), 400
            
        if not data.get('name') or not data.get('email') or not data.get('password'):
            return jsonify({'success': False, 'error': 'Missing required fields'}), 400
        
        if User.query.filter_by(email=data['email']).first():
            return jsonify({'success': False, 'error': 'Email already registered'}), 400
        
        user = User(name=data['name'], email=data['email'], role='user')
        user.set_password(data['password'])
        db.session.add(user)
        db.session.commit()
        token = user.generate_token()
        return jsonify({'success': True, 'user': user.to_dict(), 'token': token}), 201
    except Exception as e:
        print(f"Register error: {e}")
        return jsonify({'success': False, 'error': 'Server error'}), 500

@app.route('/api/auth/login', methods=['POST', 'OPTIONS'])
def login():
    if request.method == 'OPTIONS':
        return '', 204
    
    try:
        data = request.get_json(force=True)
        if not data:
            return jsonify({'success': False, 'error': 'No data provided'}), 400
            
        if not data.get('email') or not data.get('password'):
            return jsonify({'success': False, 'error': 'Missing required fields'}), 400
        
        user = User.query.filter_by(email=data['email']).first()
        if not user or not user.check_password(data['password']):
            return jsonify({'success': False, 'error': 'Invalid credentials'}), 401
        
        token = user.generate_token()
        return jsonify({'success': True, 'user': user.to_dict(), 'token': token})
    except Exception as e:
        print(f"Login error: {e}")
        return jsonify({'success': False, 'error': 'Server error'}), 500

@app.route('/api/auth/me', methods=['GET'])
def get_current_user_api():
    current_user = get_current_user()
    if not current_user:
        return jsonify({'success': False, 'error': 'Not authenticated'}), 401
    return jsonify({'success': True, 'user': current_user.to_dict()})

# Post Routes
@app.route('/api/posts', methods=['GET'])
def get_posts():
    search_query = request.args.get('q', '')
    if search_query:
        posts = Post.query.filter(
            db.or_(Post.title.ilike(f'%{search_query}%'), Post.subtitle.ilike(f'%{search_query}%'))
        ).order_by(Post.created_at.desc()).all()
    else:
        posts = Post.query.order_by(Post.created_at.desc()).all()
    return jsonify({'success': True, 'posts': [p.to_dict(include_content=True) for p in posts]})

@app.route('/api/posts/<int:id>', methods=['GET'])
def get_post(id):
    post = Post.query.get_or_404(id)
    post.increment_views()
    return jsonify({'success': True, 'post': post.to_dict(include_content=True)})

# Comment Routes
@app.route('/api/posts/<int:post_id>/comments', methods=['GET'])
def get_comments(post_id):
    post = Post.query.get_or_404(post_id)
    comments = Comment.query.filter_by(post_id=post_id).order_by(Comment.created_at.desc()).all()
    return jsonify({'success': True, 'comments': [c.to_dict() for c in comments]})

@app.route('/api/posts/<int:post_id>/comments', methods=['POST'])
def add_comment(post_id):
    post = Post.query.get_or_404(post_id)
    name = request.form.get('name')
    email = request.form.get('email')
    comment_text = request.form.get('comment')
    if not name or not email or not comment_text:
        return jsonify({'success': False, 'error': 'Missing required fields'}), 400
    user_id = None
    current_user = get_current_user()
    if current_user:
        user_id = current_user.id
    comment = Comment(name=name, email=email, comment=comment_text, post_id=post_id, user_id=user_id)
    db.session.add(comment)
    db.session.commit()
    return jsonify({'success': True, 'comment': comment.to_dict()}), 201

# Request Routes
@app.route('/api/requests', methods=['GET'])
def get_requests():
    current_user = get_current_user()
    if not current_user:
        return jsonify({'success': False, 'error': 'Not authenticated'}), 401
    if current_user.role == 'admin':
        requests = QuestionRequest.query.order_by(QuestionRequest.created_at.desc()).all()
    else:
        requests = QuestionRequest.query.filter_by(user_id=current_user.id).order_by(QuestionRequest.created_at.desc()).all()
    return jsonify({'success': True, 'requests': [r.to_dict() for r in requests]})

@app.route('/api/requests', methods=['POST'])
def create_request():
    current_user = get_current_user()
    if not current_user:
        return jsonify({'success': False, 'error': 'Not authenticated'}), 401
    data = request.get_json()
    if not data.get('title') or not data.get('category') or not data.get('description'):
        return jsonify({'success': False, 'error': 'Missing required fields'}), 400
    estimated_delivery = datetime.utcnow() + timedelta(hours=48)
    new_request = QuestionRequest(
        title=data['title'], category=data['category'], priority=data.get('priority', 'medium'),
        description=data['description'], user_id=current_user.id, estimated_delivery=estimated_delivery
    )
    db.session.add(new_request)
    db.session.commit()
    return jsonify({'success': True, 'request': new_request.to_dict()}), 201

# Admin Dashboard
@app.route('/api/admin/dashboard', methods=['GET'])
def get_admin_dashboard():
    current_user = get_current_user()
    if not current_user or current_user.role != 'admin':
        return jsonify({'success': False, 'error': 'Unauthorized'}), 403
    total_posts = Post.query.count()
    total_views = db.session.query(db.func.sum(Post.views)).scalar() or 0
    total_comments = Comment.query.count()
    total_requests = QuestionRequest.query.count()
    pending_requests = QuestionRequest.query.filter_by(status='pending').count()
    return jsonify({
        'success': True,
        'stats': {
            'totalPosts': total_posts,
            'totalViews': total_views,
            'totalComments': total_comments,
            'totalRequests': total_requests,
            'pendingRequests': pending_requests
        }
    })

# Static Files
@app.route('/static/uploads/<path:filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# ==================== Database Init ====================

def init_db():
    with app.app_context():
        db.create_all()
        admin = User.query.filter_by(email='admin@raydex.com').first()
        if not admin:
            admin = User(name='Agyarey Raphael', email='admin@raydex.com', role='admin')
            admin.set_password('admin123')
            db.session.add(admin)
            db.session.commit()
            print('✅ Admin user created: admin@raydex.com / admin123')
        print('✅ Database initialized')

if __name__ == '__main__':
    init_db()
    print('🌐 Server: http://localhost:5000')
    app.run(host='0.0.0.0', port=5000, debug=True)