"""
Database Initialization Script
Creates database tables and admin user for production

Run this from the backend folder: python init_db.py
"""

from app import app, db, User

def init_database():
    """Initialize database with admin user only"""
    
    with app.app_context():
        print("\n🚀 Initializing Production Database...\n")
        
        # Create all tables
        db.drop_all()  # Drop existing tables for a clean slate (use with caution in production)
        db.create_all()
        print("✅ Database tables created")
        
        # Check if admin exists, create if not
        admin = User.query.filter_by(email='admin@raydex.com').first()
        if not admin:
            admin = User(
                name='Agyarey Raphael',
                email='agyareyraphael@gmail.com',
                role='admin'
            )
            admin.set_password('admin123')
            db.session.add(admin)
            db.session.commit()
            print("✅ Admin user created: admin@raydex.com / admin123")
        else:
            print("✅ Admin user already exists")
        
        print("\n" + "="*60)
        print("🎉 Database initialization complete!")
        print("="*60)
        print("\n📊 Summary:")
        print(f"   • Admin user: admin@raydex.com")
        print(f"   • Articles: Ready to be created via admin panel")
        print("\n⚠️  IMPORTANT: Change the admin password after first login!")
        print("\n🌐 Next steps:")
        print("   3. Login and change admin password")
        print("\n")

if __name__ == "__main__":
    init_database()