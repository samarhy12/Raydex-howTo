# 🚀 Getting Started with Raydex Blog

## What You've Got

A complete, production-ready blog platform with:

✅ **Frontend**: HTML templates with Tailwind CSS (matching your React design exactly)
✅ **Backend**: Flask with SQLAlchemy ORM
✅ **Authentication**: JWT-based auth system
✅ **Features**: Articles, comments, custom guide requests, admin panel
✅ **Database**: SQLite (easily switchable to PostgreSQL/MySQL)
✅ **Responsive**: Mobile, tablet, and desktop optimized

## 🎯 Quick Start (3 Steps)

### Step 1: Install Dependencies

```bash
pip install flask flask-sqlalchemy flask-cors pyjwt werkzeug
```

### Step 2: Run the Server

```bash
python app_with_templates.py
```

Or use the start script:

```bash
./start.sh
```

### Step 3: Open Your Browser

Navigate to: http://localhost:5000

That's it! 🎉

## 📱 What You Can Do

### As a Visitor
- ✅ Browse articles
- ✅ Search for topics
- ✅ Read articles
- ✅ Leave comments

### As a User (After Registration)
- ✅ All visitor features +
- ✅ Request custom how-to guides
- ✅ Track request status
- ✅ Manage your profile

### As an Admin
- ✅ All user features +
- ✅ Create/edit/delete articles
- ✅ Manage user requests
- ✅ View statistics
- ✅ Review and respond to requests

## 🔑 Admin Login

```
URL: http://localhost:5000/login
Email: admin@raydex.com
Password: admin123
```

**⚠️ IMPORTANT**: Change this password immediately!

## 📂 File Structure

```
raydex-blog/
├── app_with_templates.py       ← Main application (run this!)
├── templates/                   ← HTML templates
│   ├── base.html               ← Base template (nav, footer)
│   ├── home.html               ← Homepage with article grid
│   ├── login.html              ← Login page
│   ├── register.html           ← Sign up page
│   ├── post_detail.html        ← Article page with comments
│   ├── dashboard.html          ← User dashboard
│   ├── profile.html            ← Profile settings
│   ├── request.html            ← Request guide form
│   ├── admin_dashboard.html    ← Admin overview
│   ├── admin_create.html       ← Create new article
│   ├── admin_edit.html         ← Edit article
│   └── admin_requests.html     ← Manage requests
├── static/
│   └── uploads/                ← Uploaded images go here
├── raydex.db                   ← Database (auto-created)
├── README.md                   ← Detailed documentation
├── INSTALL.md                  ← Installation guide
├── GETTING_STARTED.md          ← This file!
└── start.sh                    ← Quick start script
```

## 🎨 Design Features

The templates match your React design exactly with:

- **Fonts**: Playfair Display (serif) + Inter (sans-serif)
- **Colors**: Blue accent (#2563eb) with professional neutrals
- **Animations**: Smooth transitions and fade-ins
- **Icons**: Lucide icons throughout
- **Responsive**: Works on all screen sizes
- **Loading States**: Shimmer effects and spinners
- **Toast Notifications**: Success/error messages

## 🔧 Common Tasks

### Create a New Admin User

```python
python3
>>> from app_with_templates import app, db, User
>>> with app.app_context():
...     admin = User(name='New Admin', email='newadmin@example.com', role='admin')
...     admin.set_password('newpassword')
...     db.session.add(admin)
...     db.session.commit()
```

### Change the Port

Edit `app_with_templates.py`, last line:

```python
app.run(host='0.0.0.0', port=5001, debug=True)  # Changed from 5000 to 5001
```

### Reset the Database

```bash
rm raydex.db
python app_with_templates.py
```

This creates a fresh database with the default admin user.

### Add Custom CSS

Create `static/css/custom.css` and link it in `templates/base.html`:

```html
<link rel="stylesheet" href="{{ url_for('static', filename='css/custom.css') }}">
```

### Add Custom JavaScript

Create `static/js/custom.js` and link it in `templates/base.html`:

```html
<script src="{{ url_for('static', filename='js/custom.js') }}"></script>
```

## 🚀 Deploying to Production

### Option 1: Traditional Server

1. **Get a server** (DigitalOcean, AWS, Heroku, etc.)
2. **Install dependencies**:
   ```bash
   pip install gunicorn
   ```
3. **Run with Gunicorn**:
   ```bash
   gunicorn -w 4 -b 0.0.0.0:5000 app_with_templates:app
   ```
4. **Set up Nginx** as reverse proxy
5. **Get SSL certificate** (Let's Encrypt)

### Option 2: Platform-as-a-Service

**Heroku**:
```bash
# Create Procfile
echo "web: gunicorn app_with_templates:app" > Procfile

# Create requirements.txt
pip freeze > requirements.txt

# Deploy
heroku create
git push heroku main
```

**Railway.app**:
- Connect your GitHub repo
- Auto-detects Python
- Deploy with one click

## 📊 Database Schema

### Tables Created:
- `user` - User accounts (with JWT auth)
- `post` - Blog articles
- `comment` - Article comments
- `question_request` - Custom guide requests

### Relationships:
- User → QuestionRequests (one-to-many)
- User → Comments (one-to-many)
- Post → Comments (one-to-many)

## 🔒 Security Notes

- ✅ Passwords are hashed (werkzeug)
- ✅ JWT tokens for auth
- ✅ CORS configured
- ✅ File upload validation
- ⚠️ Set strong SECRET_KEY in production
- ⚠️ Use HTTPS in production
- ⚠️ Add rate limiting for production

## 🆘 Troubleshooting

### "Module not found" Error

```bash
pip install -r requirements.txt
```

Or manually:
```bash
pip install flask flask-sqlalchemy flask-cors pyjwt werkzeug
```

### "Port already in use"

Change the port in `app_with_templates.py` or kill the process:

```bash
# Find process on port 5000
lsof -i :5000

# Kill it
kill -9 <PID>
```

### "Permission denied" on start.sh

```bash
chmod +x start.sh
./start.sh
```

### Database is locked

SQLite can lock with concurrent access. For production, use PostgreSQL:

```bash
pip install psycopg2-binary
export DATABASE_URL="postgresql://user:pass@localhost/raydex"
python app_with_templates.py
```

## 📚 Learn More

- **Flask Docs**: https://flask.palletsprojects.com/
- **SQLAlchemy Docs**: https://docs.sqlalchemy.org/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **JWT**: https://jwt.io/introduction

## 🤝 Need Help?

1. Check `INSTALL.md` for detailed setup
2. Check `README.md` for full documentation
3. Review Flask documentation
4. Check browser console for errors (F12)

## 🎉 You're Ready!

Your blog platform is fully functional and ready to use. Here's what to do next:

1. ✅ Start the server (`python app_with_templates.py`)
2. ✅ Login as admin (admin@raydex.com / admin123)
3. ✅ **Change the admin password!**
4. ✅ Create your first blog post
5. ✅ Customize the design if needed
6. ✅ Deploy to production

**Happy blogging! 🚀**

---

*This platform matches your React design pixel-perfect using HTML, Tailwind CSS, and Flask.*
