# Raydex Blog Installation Guide

## Quick Start

### 1. Prerequisites

- Python 3.8 or higher
- pip (Python package manager)

### 2. Install Dependencies

```bash
pip install flask flask-sqlalchemy flask-cors werkzeug pyjwt
```

### 3. Set Environment Variables (Optional)

```bash
# For production, set these environment variables:
export SECRET_KEY="your-secure-random-key-here"
export DATABASE_URL="sqlite:///raydex.db"  # or PostgreSQL/MySQL URL
```

For development, the app will use default values.

### 4. Run the Application

```bash
python app_with_templates.py
```

This will:
- Create the database and tables
- Create an admin user (admin@raydex.com / admin123)
- Start the server at http://localhost:5000

### 5. Access the Application

Open your browser and navigate to:
- **Home Page**: http://localhost:5000
- **Login**: http://localhost:5000/login
- **Register**: http://localhost:5000/register
- **Admin Dashboard**: http://localhost:5000/admin/dashboard (after logging in as admin)

### 6. Default Admin Credentials

```
Email: admin@raydex.com
Password: admin123
```

**⚠️ IMPORTANT**: Change these credentials immediately after first login!

## Project Structure

```
raydex-blog/
├── app_with_templates.py       # Main Flask application
├── templates/                   # HTML templates
│   ├── base.html               # Base template with nav/footer
│   ├── home.html               # Home page
│   ├── login.html              # Login page
│   ├── register.html           # Registration page
│   ├── post_detail.html        # Article detail page
│   ├── dashboard.html          # User dashboard
│   ├── profile.html            # User profile
│   ├── request.html            # Request guide form
│   ├── admin_dashboard.html    # Admin dashboard
│   ├── admin_create.html       # Create post
│   ├── admin_edit.html         # Edit post
│   └── admin_requests.html     # Manage requests
├── static/
│   └── uploads/                # Uploaded images directory
├── raydex.db                   # SQLite database (created on first run)
└── README.md                   # This file
```

## Features

✅ Responsive design with Tailwind CSS
✅ JWT-based authentication
✅ Article management (CRUD operations)
✅ Search functionality
✅ Comments system
✅ Custom guide requests
✅ User dashboard
✅ Admin panel
✅ Profile management
✅ Toast notifications
✅ Loading states

## Database Models

### User
- id, name, email, password_hash, role, avatar, created_at
- Relationships: question_requests, comments

### Post
- id, title, subtitle, author, content (JSON), views, created_at, updated_at
- Relationships: comments

### Comment
- id, name, email, comment, post_id, user_id, created_at

### QuestionRequest
- id, title, category, priority, description, status, user_id, article_id
- created_at, estimated_delivery, completed_at

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Posts
- `GET /api/posts` - Get all posts (optional ?q=search)
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create post (admin only)
- `PUT /api/posts/:id` - Update post (admin only)
- `DELETE /api/posts/:id` - Delete post (admin only)

### Comments
- `GET /api/posts/:id/comments` - Get comments
- `POST /api/posts/:id/comments` - Add comment

### Requests
- `GET /api/requests` - Get user's requests
- `POST /api/requests` - Create request
- `PUT /api/requests/:id` - Update request (admin)
- `DELETE /api/requests/:id` - Delete request (admin)

### Admin
- `GET /api/admin/dashboard` - Get statistics

## Configuration

### Change Secret Key

Edit `app_with_templates.py`:

```python
app.config['SECRET_KEY'] = 'your-new-secret-key'
```

Or set environment variable:

```bash
export SECRET_KEY="your-new-secret-key"
```

### Change Database

For PostgreSQL:

```bash
export DATABASE_URL="postgresql://user:pass@localhost/raydex"
```

For MySQL:

```bash
export DATABASE_URL="mysql://user:pass@localhost/raydex"
```

### File Upload Limits

Edit in `app_with_templates.py`:

```python
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB
```

## Production Deployment

### 1. Use a Production Server

Don't use Flask's built-in server in production. Use:
- **Gunicorn**: `pip install gunicorn`
- Run: `gunicorn -w 4 app_with_templates:app`

### 2. Use a Production Database

Switch from SQLite to PostgreSQL or MySQL for better performance and concurrent access.

### 3. Set Environment Variables

```bash
export FLASK_ENV=production
export SECRET_KEY="$(python -c 'import secrets; print(secrets.token_hex(32))')"
export DATABASE_URL="your-production-database-url"
```

### 4. Enable HTTPS

Use a reverse proxy (Nginx/Apache) with SSL certificates (Let's Encrypt).

### 5. Security Checklist

- [ ] Change default admin password
- [ ] Set strong SECRET_KEY
- [ ] Use HTTPS in production
- [ ] Implement rate limiting
- [ ] Add CSRF protection
- [ ] Validate all user inputs
- [ ] Set up regular backups
- [ ] Monitor logs
- [ ] Keep dependencies updated

## Troubleshooting

### Port Already in Use

Change the port in `app_with_templates.py`:

```python
app.run(host='0.0.0.0', port=5001, debug=True)
```

### Database Errors

Delete the database file and restart:

```bash
rm raydex.db
python app_with_templates.py
```

### Upload Folder Permission

Ensure the static/uploads folder is writable:

```bash
chmod 755 static/uploads
```

## Development

### Enable Debug Mode

Debug mode is enabled by default during development. Disable in production!

### Hot Reload

Flask automatically reloads when you save changes in debug mode.

### Testing

Create test accounts and data:

```python
# In Python shell or script
from app_with_templates import app, db, User

with app.app_context():
    # Create test user
    user = User(name='Test User', email='test@example.com', role='user')
    user.set_password('testpass')
    db.session.add(user)
    db.session.commit()
```

## Support

For issues or questions:
1. Check this installation guide
2. Review the README.md
3. Check Flask documentation: https://flask.palletsprojects.com/

## License

This project is provided as-is for educational and development purposes.

---

**Happy coding! 🚀**
