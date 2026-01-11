
import os
from datetime import datetime, timedelta
from functools import wraps
from flask import Flask, request, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
import json
import jwt

# ==================== Flask App Configuration ====================

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = 'static/uploads'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max file size

# CORS configuration
CORS(app, supports_credentials=True, origins=['http://localhost:3000', 'http://localhost:5173'])

# Database initialization
db = SQLAlchemy(app)

# Ensure upload directory exists
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# Allowed file extensions
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'webp'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


# ==================== Database Models ====================

class User(db.Model):
    """User model for authentication and authorization"""
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(20), default='user')  # 'user' or 'admin'
    avatar = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationships
    question_requests = db.relationship('QuestionRequest', backref='user', lazy=True, cascade='all, delete-orphan')
    comments = db.relationship('Comment', backref='user', lazy=True, cascade='all, delete-orphan')
    
    def set_password(self, password):
        """Hash and set password"""
        self.password_hash = generate_password_hash(password)
    
    def check_password(self, password):
        """Verify password"""
        return check_password_hash(self.password_hash, password)
    
    def generate_token(self):
        """Generate JWT token"""
        payload = {
            'user_id': self.id,
            'email': self.email,
            'role': self.role,
            'exp': datetime.utcnow() + timedelta(days=7)
        }
        return jwt.encode(payload, app.config['SECRET_KEY'], algorithm='HS256')
    
    def to_dict(self):
        """Convert user to dictionary"""
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'role': self.role,
            'avatar': self.avatar,
            'joinedAt': self.created_at.isoformat()
        }


class Post(db.Model):
    """Blog post/article model"""
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    subtitle = db.Column(db.String(300), nullable=True)
    author = db.Column(db.String(100), default='Agyarey Raphael')
    content = db.Column(db.Text, nullable=False)  # JSON string of content blocks
    views = db.Column(db.Integer, default=0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    comments = db.relationship('Comment', backref='post', lazy=True, cascade='all, delete-orphan')
    
    def get_content(self):
        """Parse content JSON"""
        try:
            return json.loads(self.content)
        except:
            return []
    
    def set_content(self, content_list):
        """Set content as JSON"""
        self.content = json.dumps(content_list)
    
    def increment_views(self):
        """Increment view count"""
        self.views += 1
        db.session.commit()
    
    def to_dict(self, include_content=True):
        """Convert post to dictionary"""
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
    """Comment model"""
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    comment = db.Column(db.Text, nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        """Convert comment to dictionary"""
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'comment': self.comment,
            'postId': self.post_id,
            'created_at': self.created_at.isoformat()
        }


class QuestionRequest(db.Model):
    """Question/How-To request model"""
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    category = db.Column(db.String(50), nullable=False)
    priority = db.Column(db.String(20), default='medium')  # low, medium, high
    description = db.Column(db.Text, nullable=False)
    status = db.Column(db.String(20), default='pending')  # pending, in-progress, completed
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    article_id = db.Column(db.Integer, db.ForeignKey('post.id'), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    estimated_delivery = db.Column(db.DateTime, nullable=True)
    completed_at = db.Column(db.DateTime, nullable=True)
    
    def to_dict(self):
        """Convert request to dictionary"""
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


# ==================== JWT Authentication Decorators ====================

def token_required(f):
    """Decorator to require valid JWT token"""
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        
        # Get token from Authorization header
        if 'Authorization' in request.headers:
            auth_header = request.headers['Authorization']
            try:
                token = auth_header.split(' ')[1]  # Bearer <token>
            except IndexError:
                return jsonify({'success': False, 'error': 'Invalid token format'}), 401
        
        if not token:
            return jsonify({'success': False, 'error': 'Token is missing'}), 401
        
        try:
            # Decode token
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
            current_user = User.query.get(data['user_id'])
            
            if not current_user:
                return jsonify({'success': False, 'error': 'User not found'}), 401
                
        except jwt.ExpiredSignatureError:
            return jsonify({'success': False, 'error': 'Token has expired'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'success': False, 'error': 'Invalid token'}), 401
        
        return f(current_user, *args, **kwargs)
    
    return decorated


def admin_required(f):
    """Decorator to require admin role"""
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        
        # Get token from Authorization header
        if 'Authorization' in request.headers:
            auth_header = request.headers['Authorization']
            try:
                token = auth_header.split(' ')[1]
            except IndexError:
                return jsonify({'success': False, 'error': 'Invalid token format'}), 401
        
        if not token:
            return jsonify({'success': False, 'error': 'Token is missing'}), 401
        
        try:
            # Decode token
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
            current_user = User.query.get(data['user_id'])
            
            if not current_user:
                return jsonify({'success': False, 'error': 'User not found'}), 401
            
            if current_user.role != 'admin':
                return jsonify({'success': False, 'error': 'Admin access required'}), 403
                
        except jwt.ExpiredSignatureError:
            return jsonify({'success': False, 'error': 'Token has expired'}), 401
        except jwt.InvalidTokenError:
            return jsonify({'success': False, 'error': 'Invalid token'}), 401
        
        return f(current_user, *args, **kwargs)
    
    return decorated


# ==================== Authentication Routes ====================

@app.route('/api/auth/register', methods=['POST'])
def register():
    """Register new user"""
    data = request.get_json()
    
    # Validate required fields
    if not data.get('name') or not data.get('email') or not data.get('password'):
        return jsonify({'success': False, 'error': 'Missing required fields'}), 400
    
    # Check if email already exists
    if User.query.filter_by(email=data['email']).first():
        return jsonify({'success': False, 'error': 'Email already registered'}), 400
    
    # Create new user
    user = User(
        name=data['name'],
        email=data['email'],
        role='user'
    )
    user.set_password(data['password'])
    
    db.session.add(user)
    db.session.commit()
    
    # Generate token
    token = user.generate_token()
    
    return jsonify({
        'success': True,
        'user': user.to_dict(),
        'token': token
    }), 201


@app.route('/api/auth/login', methods=['POST'])
def login():
    """Login user"""
    data = request.get_json()
    
    # Validate required fields
    if not data.get('email') or not data.get('password'):
        return jsonify({'success': False, 'error': 'Missing required fields'}), 400
    
    # Find user
    user = User.query.filter_by(email=data['email']).first()
    
    # Verify credentials
    if not user or not user.check_password(data['password']):
        return jsonify({'success': False, 'error': 'Invalid credentials'}), 401
    
    # Generate token
    token = user.generate_token()
    
    return jsonify({
        'success': True,
        'user': user.to_dict(),
        'token': token
    })


@app.route('/api/auth/logout', methods=['POST'])
def logout():
    """Logout user (client-side token removal)"""
    return jsonify({'success': True})


@app.route('/api/auth/me', methods=['GET'])
@token_required
def get_current_user(current_user):
    """Get current authenticated user"""
    return jsonify({
        'success': True,
        'user': current_user.to_dict()
    })


# ==================== User Profile Routes ====================

@app.route('/api/user/profile', methods=['GET'])
@token_required
def get_profile(current_user):
    """Get user profile"""
    return jsonify({
        'success': True,
        'user': current_user.to_dict()
    })


@app.route('/api/user/profile', methods=['PUT'])
@token_required
def update_profile(current_user):
    """Update user profile"""
    data = request.get_json()
    
    # Update name
    if 'name' in data:
        current_user.name = data['name']
    
    # Update email (check if not taken)
    if 'email' in data:
        existing = User.query.filter_by(email=data['email']).first()
        if existing and existing.id != current_user.id:
            return jsonify({'success': False, 'error': 'Email already in use'}), 400
        current_user.email = data['email']
    
    # Update avatar
    if 'avatar' in data:
        current_user.avatar = data['avatar']
    
    # Update password
    if 'password' in data and data['password']:
        current_user.set_password(data['password'])
    
    db.session.commit()
    
    return jsonify({'success': True, 'user': current_user.to_dict()})


# ==================== Question Request Routes ====================

@app.route('/api/requests', methods=['GET'])
@token_required
def get_requests(current_user):
    """Get question requests (filtered by role)"""
    if current_user.role == 'admin':
        # Admin sees all requests
        requests = QuestionRequest.query.order_by(QuestionRequest.created_at.desc()).all()
    else:
        # User sees only their requests
        requests = QuestionRequest.query.filter_by(user_id=current_user.id).order_by(QuestionRequest.created_at.desc()).all()
    
    return jsonify({
        'success': True,
        'requests': [r.to_dict() for r in requests]
    })


@app.route('/api/requests', methods=['POST'])
@token_required
def create_request(current_user):
    """Create new question request"""
    data = request.get_json()
    
    # Validate required fields
    if not data.get('title') or not data.get('category') or not data.get('description'):
        return jsonify({'success': False, 'error': 'Missing required fields'}), 400
    
    # Set estimated delivery to 48 hours from now
    estimated_delivery = datetime.utcnow() + timedelta(hours=48)
    
    # Create new request
    new_request = QuestionRequest(
        title=data['title'],
        category=data['category'],
        priority=data.get('priority', 'medium'),
        description=data['description'],
        user_id=current_user.id,
        estimated_delivery=estimated_delivery
    )
    
    db.session.add(new_request)
    db.session.commit()
    
    return jsonify({
        'success': True,
        'request': new_request.to_dict()
    }), 201


@app.route('/api/requests/<int:id>', methods=['GET'])
@token_required
def get_request(current_user, id):
    """Get single request"""
    request_obj = QuestionRequest.query.get_or_404(id)
    
    # Check authorization
    if current_user.role != 'admin' and request_obj.user_id != current_user.id:
        return jsonify({'success': False, 'error': 'Unauthorized'}), 403
    
    return jsonify({
        'success': True,
        'request': request_obj.to_dict()
    })


@app.route('/api/requests/<int:id>', methods=['PUT'])
@admin_required
def update_request(current_user, id):
    """Update request (admin only)"""
    request_obj = QuestionRequest.query.get_or_404(id)
    data = request.get_json()
    
    # Update status
    if 'status' in data:
        request_obj.status = data['status']
        if data['status'] == 'completed':
            request_obj.completed_at = datetime.utcnow()
    
    # Link to article
    if 'articleId' in data:
        request_obj.article_id = data['articleId']
    
    db.session.commit()
    
    return jsonify({'success': True, 'request': request_obj.to_dict()})


@app.route('/api/requests/<int:id>', methods=['DELETE'])
@admin_required
def delete_request(current_user, id):
    """Delete request (admin only)"""
    request_obj = QuestionRequest.query.get_or_404(id)
    db.session.delete(request_obj)
    db.session.commit()
    
    return jsonify({'success': True})


# ==================== Post/Article Routes ====================

@app.route('/api/posts', methods=['GET'])
def get_posts():
    """Get all posts with optional search"""
    search_query = request.args.get('q', '')
    
    if search_query:
        posts = Post.query.filter(
            db.or_(
                Post.title.ilike(f'%{search_query}%'),
                Post.subtitle.ilike(f'%{search_query}%')
            )
        ).order_by(Post.created_at.desc()).all()
    else:
        posts = Post.query.order_by(Post.created_at.desc()).all()
    
    return jsonify({
        'success': True,
        'posts': [p.to_dict(include_content=True) for p in posts]
    })


@app.route('/api/posts/<int:id>', methods=['GET'])
def get_post(id):
    """Get single post with full content"""
    post = Post.query.get_or_404(id)
    
    # Increment view count
    post.increment_views()
    
    return jsonify({
        'success': True,
        'post': post.to_dict(include_content=True)
    })


@app.route('/api/posts', methods=['POST'])
@admin_required
def create_post(current_user):
    """Create new post (admin only)"""
    # Handle multipart form data
    title = request.form.get('title')
    subtitle = request.form.get('subtitle', '')
    
    if not title:
        return jsonify({'success': False, 'error': 'Title is required'}), 400
    
    # Parse content blocks
    content_blocks = []
    block_index = 0
    
    while True:
        block_type = request.form.get(f'block_type_{block_index}')
        if not block_type:
            break
        
        if block_type == 'text':
            text_data = request.form.get(f'text_{block_index}', '')
            content_blocks.append({
                'type': 'text',
                'data': text_data
            })
        
        elif block_type == 'image':
            # Handle image upload
            image_file = request.files.get(f'image_{block_index}')
            if image_file and allowed_file(image_file.filename):
                filename = secure_filename(f"{datetime.utcnow().timestamp()}_{image_file.filename}")
                filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
                image_file.save(filepath)
                
                caption = request.form.get(f'caption_{block_index}', '')
                content_blocks.append({
                    'type': 'image',
                    'data': filename,
                    'caption': caption
                })
        
        block_index += 1
    
    # Create post
    post = Post(
        title=title,
        subtitle=subtitle
    )
    post.set_content(content_blocks)
    
    db.session.add(post)
    db.session.commit()
    
    return jsonify({
        'success': True,
        'post': post.to_dict()
    }), 201


@app.route('/api/posts/<int:id>', methods=['PUT'])
@admin_required
def update_post(current_user, id):
    """Update post (admin only)"""
    post = Post.query.get_or_404(id)
    
    # Handle multipart form data
    title = request.form.get('title')
    subtitle = request.form.get('subtitle', '')
    
    if title:
        post.title = title
    if subtitle is not None:
        post.subtitle = subtitle
    
    # Parse content blocks
    content_blocks = []
    block_index = 0
    
    while True:
        block_type = request.form.get(f'block_type_{block_index}')
        if not block_type:
            break
        
        if block_type == 'text':
            text_data = request.form.get(f'text_{block_index}', '')
            content_blocks.append({
                'type': 'text',
                'data': text_data
            })
        
        elif block_type == 'image':
            # Check for new upload
            image_file = request.files.get(f'image_{block_index}')
            if image_file and allowed_file(image_file.filename):
                filename = secure_filename(f"{datetime.utcnow().timestamp()}_{image_file.filename}")
                filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
                image_file.save(filepath)
                
                caption = request.form.get(f'caption_{block_index}', '')
                content_blocks.append({
                    'type': 'image',
                    'data': filename,
                    'caption': caption
                })
            else:
                # Use existing image
                existing_image = request.form.get(f'existing_image_{block_index}')
                if existing_image:
                    caption = request.form.get(f'caption_{block_index}', '')
                    content_blocks.append({
                        'type': 'image',
                        'data': existing_image,
                        'caption': caption
                    })
        
        block_index += 1
    
    if content_blocks:
        post.set_content(content_blocks)
    
    post.updated_at = datetime.utcnow()
    db.session.commit()
    
    return jsonify({
        'success': True,
        'post': post.to_dict()
    })


@app.route('/api/posts/<int:id>', methods=['DELETE'])
@admin_required
def delete_post(current_user, id):
    """Delete post (admin only)"""
    post = Post.query.get_or_404(id)
    
    # Delete associated image files
    for block in post.get_content():
        if block['type'] == 'image':
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], block['data'])
            if os.path.exists(filepath):
                os.remove(filepath)
    
    db.session.delete(post)
    db.session.commit()
    
    return jsonify({'success': True})


# ==================== Comment Routes ====================

@app.route('/api/posts/<int:post_id>/comments', methods=['GET'])
def get_comments(post_id):
    """Get comments for a post"""
    post = Post.query.get_or_404(post_id)
    comments = Comment.query.filter_by(post_id=post_id).order_by(Comment.created_at.desc()).all()
    
    return jsonify({
        'success': True,
        'comments': [c.to_dict() for c in comments]
    })


@app.route('/api/posts/<int:post_id>/comments', methods=['POST'])
def add_comment(post_id):
    """Add comment to post"""
    post = Post.query.get_or_404(post_id)
    
    # Handle form data
    name = request.form.get('name')
    email = request.form.get('email')
    comment_text = request.form.get('comment')
    
    if not name or not email or not comment_text:
        return jsonify({'success': False, 'error': 'Missing required fields'}), 400
    
    # Get user_id from token if authenticated
    user_id = None
    if 'Authorization' in request.headers:
        try:
            token = request.headers['Authorization'].split(' ')[1]
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
            user_id = data['user_id']
        except:
            pass
    
    # Create comment
    comment = Comment(
        name=name,
        email=email,
        comment=comment_text,
        post_id=post_id,
        user_id=user_id
    )
    
    db.session.add(comment)
    db.session.commit()
    
    return jsonify({
        'success': True,
        'comment': comment.to_dict()
    }), 201


@app.route('/api/comments/<int:id>', methods=['DELETE'])
@admin_required
def delete_comment(current_user, id):
    """Delete comment (admin only)"""
    comment = Comment.query.get_or_404(id)
    db.session.delete(comment)
    db.session.commit()
    
    return jsonify({'success': True})


# ==================== Admin Dashboard Route ====================

@app.route('/api/admin/dashboard', methods=['GET'])
@admin_required
def get_admin_dashboard(current_user):
    """Get admin dashboard statistics"""
    total_posts = Post.query.count()
    total_views = db.session.query(db.func.sum(Post.views)).scalar() or 0
    total_comments = Comment.query.count()
    total_requests = QuestionRequest.query.count()
    pending_requests = QuestionRequest.query.filter_by(status='pending').count()
    
    recent_posts = Post.query.order_by(Post.created_at.desc()).limit(5).all()
    recent_requests = QuestionRequest.query.order_by(QuestionRequest.created_at.desc()).limit(5).all()
    
    return jsonify({
        'success': True,
        'stats': {
            'totalPosts': total_posts,
            'totalViews': total_views,
            'totalComments': total_comments,
            'totalRequests': total_requests,
            'pendingRequests': pending_requests
        },
        'recentPosts': [p.to_dict(include_content=False) for p in recent_posts],
        'recentRequests': [r.to_dict() for r in recent_requests]
    })


# ==================== Static Files ====================

@app.route('/static/uploads/<path:filename>')
def uploaded_file(filename):
    """Serve uploaded files"""
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)


# ==================== Health Check ====================

@app.route('/api/health', methods=['GET'])
def health_check():
    """API health check"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.utcnow().isoformat()
    })


# ==================== Database Initialization ====================

def init_db():
    """Initialize database and create admin user"""
    with app.app_context():
        # Create tables
        db.create_all()
        
        # Create admin user if doesn't exist
        admin = User.query.filter_by(email='admin@raydex.com').first()
        if not admin:
            admin = User(
                name='Agyarey Raphael',
                email='admin@raydex.com',
                role='admin'
            )
            admin.set_password('admin123')
            db.session.add(admin)
            db.session.commit()
            print('✅ Admin user created: admin@raydex.com / admin123')
        
        print('✅ Database initialized successfully')


# ==================== Error Handlers ====================

@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    return jsonify({'success': False, 'error': 'Resource not found'}), 404


@app.errorhandler(500)
def internal_error(error):
    """Handle 500 errors"""
    db.session.rollback()
    return jsonify({'success': False, 'error': 'Internal server error'}), 500


# ==================== Main ====================

if __name__ == '__main__':
    # Initialize database
    init_db()
    
    # Run app
    print('🚀 Raydex How-To Backend starting...')
    print('📝 Admin: admin@raydex.com / admin123')
    print('🌐 Frontend: http://localhost:3000')
    print('🔧 Backend: http://localhost:5000')
    app.run(debug=True, host='0.0.0.0', port=5000)