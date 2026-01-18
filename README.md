# Raydex Blog - HTML/Tailwind/Flask Implementation

Complete HTML implementation of the Raydex blog platform with Tailwind CSS and Flask backend.

## 📁 Project Structure

```
raydex-blog/
├── app.py      # Main Flask application with template routes
├── templates/                  # HTML templates
│   ├── base.html              # Base template with navigation & footer
│   ├── home.html              # Home page with article grid
│   ├── login.html             # Login page
│   ├── register.html          # Registration page
│   ├── post_detail.html       # Article detail page with comments
│   ├── dashboard.html         # User dashboard (to be created)
│   ├── profile.html           # User profile settings (to be created)
│   ├── request.html           # Request custom guide form (to be created)
│   ├── admin_dashboard.html   # Admin dashboard (to be created)
│   ├── admin_create.html      # Create new post (to be created)
│   ├── admin_edit.html        # Edit post (to be created)
│   └── admin_requests.html    # Manage requests (to be created)
├── static/
│   ├── css/                   # Custom CSS (if needed)
│   ├── js/                    # Custom JavaScript (if needed)
│   └── uploads/               # Uploaded images
└── README.md                  # This file
```

## 🚀 Features

- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Authentication**: JWT-based auth with login/register
- **Article Management**: Browse, search, and read articles
- **Comments System**: Post and view comments on articles
- **User Dashboard**: Track custom guide requests
- **Admin Panel**: Full CRUD for articles and request management
- **Custom Requests**: Users can request custom how-to guides
- **Profile Management**: Update user profile and settings

## 🎨 Design Features

- Clean, modern interface matching the React design
- Playfair Display (serif) and Inter (sans-serif) fonts
- Custom color palette with accent colors
- Smooth animations and transitions
- Loading states and empty states
- Toast notifications
- Responsive navigation with dropdown menus

## ⚙️ Setup Instructions

### 1. Install Dependencies

```bash
pip install flask flask-sqlalchemy flask-cors werkzeug pyjwt
```

### 2. Environment Variables

Create a `.env` file or set these variables:

```bash
export SECRET_KEY="your-secret-key-here"
export DATABASE_URL="sqlite:///raydex.db"  # or your database URL
```

### 3. Initialize Database

```bash
python app.py
```

This will:

- Create the database tables
- Create an admin user (admin@raydex.com / admin123)
- Start the server on http://localhost:5000

### 4. Access the Application

- **Home**: http://localhost:5000
- **Login**: http://localhost:5000/login
- **Register**: http://localhost:5000/register
- **Admin Dashboard**: http://localhost:5000/admin/dashboard

## 📝 Default Admin Credentials

- **Email**: admin@raydex.com
- **Password**: admin123

**⚠️ Change these credentials in production!**

## 🔌 API Endpoints

All API endpoints from the original backend are included:

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Posts

- `GET /api/posts` - Get all posts (with optional search)
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create post (admin only)
- `PUT /api/posts/:id` - Update post (admin only)
- `DELETE /api/posts/:id` - Delete post (admin only)

### Comments

- `GET /api/posts/:id/comments` - Get comments for post
- `POST /api/posts/:id/comments` - Add comment

### Requests

- `GET /api/requests` - Get user requests
- `POST /api/requests` - Create new request
- `PUT /api/requests/:id` - Update request (admin only)
- `DELETE /api/requests/:id` - Delete request (admin only)

### Admin

- `GET /api/admin/dashboard` - Get dashboard statistics

## 🎯 Usage

### For Users

1. Register an account or log in
2. Browse articles on the home page
3. Search for specific topics
4. Read articles and leave comments
5. Request custom guides from your dashboard

### For Admins

1. Log in with admin credentials
2. Access the admin dashboard
3. Create, edit, or delete articles
4. Manage user requests
5. View statistics

## 🔧 Customization

### Styling

- Tailwind CSS is loaded via CDN
- Custom colors are defined in the base template
- Modify `tailwind.config` in base.html for theme changes

### Adding Features

- Templates extend `base.html` for consistency
- Add new routes in `app.py`
- Create corresponding HTML templates

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Color Palette

- **Primary (Accent)**: #2563eb (Blue)
- **Surface**: #ffffff (White)
- **Paper**: #fafafa (Light Gray)
- **Ink**: #1a1a1a (Dark)
- **Success**: #10b981 (Green)
- **Error**: #ef4444 (Red)
- **Warning**: #f59e0b (Amber)

## 📦 Dependencies

- Flask 3.x
- Flask-SQLAlchemy
- Flask-CORS
- Werkzeug
- PyJWT
- Tailwind CSS (CDN)
- Lucide Icons (CDN)

## 🔒 Security Notes

- Change SECRET_KEY in production
- Use HTTPS in production
- Implement rate limiting
- Add CSRF protection for forms
- Validate and sanitize all user inputs
- Use environment variables for sensitive data

## 📄 License

This project matches the design and functionality of the React implementation provided.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ using Flask, Tailwind CSS, and modern web technologies**
