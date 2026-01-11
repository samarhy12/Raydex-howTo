"""
Database Initialization Script
Creates sample articles with real content for testing

Run this from the backend folder: python init_db.py
"""

from app import app, db, Post, User
import json
import os
import requests
from io import BytesIO

def download_image(url, filename):
    """Download image from URL and save to uploads folder"""
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            filepath = os.path.join('static/uploads', filename)
            with open(filepath, 'wb') as f:
                f.write(response.content)
            print(f"   ✅ Downloaded: {filename}")
            return filename
    except Exception as e:
        print(f"   ⚠️  Failed to download {filename}: {e}")
    return None

def init_database():
    """Initialize database with sample articles"""
    
    with app.app_context():
        print("\n🚀 Initializing Database...\n")
        
        # Create all tables
        db.create_all()
        print("✅ Database tables created")
        
        # Check if admin exists, create if not
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
            print("✅ Admin user created: admin@raydex.com / admin123")
        else:
            print("✅ Admin user already exists")
        
        # Check if articles already exist
        existing_posts = Post.query.count()
        if existing_posts > 0:
            print(f"\n⚠️  Database already has {existing_posts} article(s)")
            response = input("Delete existing articles and create new ones? (y/n): ")
            if response.lower() != 'y':
                print("❌ Cancelled. Keeping existing articles.")
                return
            
            # Delete existing posts
            Post.query.delete()
            db.session.commit()
            print("🗑️  Deleted existing articles")
        
        # Create uploads directory if it doesn't exist
        os.makedirs('static/uploads', exist_ok=True)
        print("\n📁 Preparing images...")
        
        # Download sample images (using placeholder images)
        images = {
            'react-flask.jpg': 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
            'css-design.jpg': 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80',
            'typescript.jpg': 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
            'python-code.jpg': 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80',
            'database.jpg': 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
        }
        
        downloaded_images = {}
        for filename, url in images.items():
            result = download_image(url, filename)
            if result:
                downloaded_images[filename] = result
        
        print(f"\n✅ Downloaded {len(downloaded_images)}/{len(images)} images")
        
        # Sample articles with detailed content
        articles = [
            {
                "title": "Building a Modern Web Application with React and Flask",
                "subtitle": "A comprehensive guide to full-stack development using React frontend and Flask backend",
                "content": [
                    {
                        "type": "text",
                        "data": "In this comprehensive tutorial, we'll explore how to build a modern, production-ready web application using React for the frontend and Flask for the backend. This powerful combination provides flexibility, performance, and a great developer experience."
                    },
                    {
                        "type": "image",
                        "data": downloaded_images.get('react-flask.jpg', ''),
                        "caption": "React and Flask - A powerful full-stack combination"
                    },
                    {
                        "type": "text",
                        "data": "React is a JavaScript library for building user interfaces, maintained by Meta and a vibrant community. It allows you to create reusable components and manage complex application state efficiently. Flask, on the other hand, is a lightweight Python web framework that makes it incredibly easy to build robust REST APIs."
                    },
                    {
                        "type": "text",
                        "data": "The key advantage of this stack is that it separates concerns perfectly. React handles all the UI logic and user interactions, while Flask manages data processing, business logic, and database operations. This separation makes your application easier to test, maintain, and scale."
                    },
                    {
                        "type": "text",
                        "data": "We'll cover setting up a React development environment with Vite, creating a Flask API with SQLAlchemy for database management, implementing authentication with JWT tokens, and deploying both applications to production. By the end, you'll have a solid foundation for building any type of web application."
                    }
                ]
            },
            {
                "title": "Advanced CSS Techniques for Modern Layouts",
                "subtitle": "Master CSS Grid, Flexbox, and Custom Properties to create stunning responsive designs",
                "content": [
                    {
                        "type": "text",
                        "data": "CSS has evolved tremendously over the past few years. Gone are the days of float-based layouts and clearfix hacks. Today's CSS provides powerful, intuitive tools for creating responsive, beautiful designs that work seamlessly across all devices."
                    },
                    {
                        "type": "image",
                        "data": downloaded_images.get('css-design.jpg', ''),
                        "caption": "Modern CSS enables stunning layouts without frameworks"
                    },
                    {
                        "type": "text",
                        "data": "CSS Grid is a revolutionary two-dimensional layout system that gives you precise control over both rows and columns. Unlike older techniques, Grid allows you to define layouts explicitly, making it perfect for complex page structures. You can create magazine-style layouts, card grids, and intricate dashboard interfaces with minimal code."
                    },
                    {
                        "type": "text",
                        "data": "Flexbox complements Grid beautifully by handling one-dimensional layouts with ease. It's ideal for navigation bars, card layouts, and any situation where you need to align or distribute items along a single axis. The combination of Grid and Flexbox covers virtually every layout scenario you'll encounter."
                    },
                    {
                        "type": "text",
                        "data": "CSS Custom Properties (variables) add another dimension of power. They enable you to create themeable designs, implement dark mode with ease, and maintain consistency across your entire application. We'll explore how to use custom properties effectively, including cascading, inheritance, and JavaScript integration for dynamic theming."
                    }
                ]
            },
            {
                "title": "TypeScript for React Developers: A Complete Guide",
                "subtitle": "Learn how to write type-safe React applications that scale with confidence",
                "content": [
                    {
                        "type": "text",
                        "data": "TypeScript has become the industry standard for large-scale React applications. It provides static typing, excellent IDE support, and catches errors before they reach production. If you're still using plain JavaScript for React, you're missing out on a massive productivity boost."
                    },
                    {
                        "type": "image",
                        "data": downloaded_images.get('typescript.jpg', ''),
                        "caption": "TypeScript brings type safety and better tooling to React development"
                    },
                    {
                        "type": "text",
                        "data": "The transition from JavaScript to TypeScript is smoother than most developers expect. You can adopt TypeScript gradually, starting with simple type annotations and progressively adding more sophisticated types as you become comfortable. Your existing JavaScript knowledge transfers directly - TypeScript is truly a superset of JavaScript."
                    },
                    {
                        "type": "text",
                        "data": "Key benefits include catching bugs at compile time rather than runtime, receiving intelligent autocomplete suggestions as you code, and making refactoring dramatically safer. When you rename a component or change its props, TypeScript will highlight every location that needs updating. This becomes invaluable as your codebase grows."
                    },
                    {
                        "type": "text",
                        "data": "We'll cover essential TypeScript concepts for React developers: typing props and state, working with events, using generics for reusable components, typing hooks like useState and useReducer, and integrating TypeScript with popular libraries. You'll also learn best practices for organizing your types and avoiding common pitfalls."
                    }
                ]
            },
            {
                "title": "Python Best Practices for Production Applications",
                "subtitle": "Write clean, maintainable, and efficient Python code that stands the test of time",
                "content": [
                    {
                        "type": "text",
                        "data": "Writing Python code that works is easy. Writing Python code that's maintainable, efficient, and production-ready requires understanding best practices and design patterns. This guide will transform the way you write Python applications."
                    },
                    {
                        "type": "image",
                        "data": downloaded_images.get('python-code.jpg', ''),
                        "caption": "Clean Python code is a joy to read and maintain"
                    },
                    {
                        "type": "text",
                        "data": "Python's philosophy, captured in 'The Zen of Python', emphasizes readability and simplicity. Following PEP 8 style guidelines ensures your code is consistent and easy for others to understand. But style is just the beginning - true code quality comes from thoughtful design and architecture."
                    },
                    {
                        "type": "text",
                        "data": "Modern Python offers powerful features like type hints, dataclasses, and context managers that can make your code more robust and self-documenting. We'll explore when and how to use these features effectively, along with testing strategies, error handling patterns, and performance optimization techniques."
                    },
                    {
                        "type": "text",
                        "data": "We'll also cover project structure, dependency management with virtual environments and requirements.txt, logging best practices, and configuration management. You'll learn how to write Python code that's not just functional, but professional and production-ready."
                    }
                ]
            },
            {
                "title": "Database Design Fundamentals: From ER Diagrams to SQL",
                "subtitle": "Master the art of designing efficient, scalable database schemas",
                "content": [
                    {
                        "type": "text",
                        "data": "A well-designed database is the foundation of any successful application. Poor database design leads to slow queries, data inconsistencies, and maintenance nightmares. Learning proper database design principles will save you countless hours of frustration and refactoring."
                    },
                    {
                        "type": "image",
                        "data": downloaded_images.get('database.jpg', ''),
                        "caption": "Good database design is crucial for application performance and maintainability"
                    },
                    {
                        "type": "text",
                        "data": "Database design begins with understanding your data and its relationships. Entity-Relationship diagrams help visualize these relationships before you write any code. We'll cover identifying entities, defining relationships (one-to-one, one-to-many, many-to-many), and normalizing your schema to eliminate redundancy."
                    },
                    {
                        "type": "text",
                        "data": "Normalization is crucial for maintaining data integrity, but knowing when to denormalize for performance is equally important. We'll discuss the different normal forms, when to apply them, and scenarios where denormalization makes sense. You'll learn to balance theoretical perfection with practical performance needs."
                    },
                    {
                        "type": "text",
                        "data": "Beyond schema design, we'll cover indexing strategies, query optimization, and using EXPLAIN to understand query performance. You'll learn how to write efficient SQL queries, avoid common pitfalls like N+1 queries, and use database features like transactions, constraints, and triggers effectively."
                    }
                ]
            }
        ]
        
        print("\n📝 Creating articles...")
        
        # Create posts
        for i, article_data in enumerate(articles, 1):
            post = Post(
                title=article_data["title"],
                subtitle=article_data["subtitle"]
            )
            
            # Filter out content blocks with missing images
            valid_content = []
            for block in article_data["content"]:
                if block["type"] == "image" and not block["data"]:
                    # Skip image blocks where download failed
                    continue
                valid_content.append(block)
            
            post.set_content(valid_content)
            db.session.add(post)
            print(f"   {i}. {article_data['title']}")
        
        db.session.commit()
        
        print(f"\n✅ Successfully created {len(articles)} articles!")
        print("\n" + "="*60)
        print("🎉 Database initialization complete!")
        print("="*60)
        print("\n📊 Summary:")
        print(f"   • Admin user: admin@raydex.com / admin123")
        print(f"   • Articles created: {len(articles)}")
        print(f"   • Images downloaded: {len(downloaded_images)}")
        print("\n🌐 Next steps:")
        print("   1. Start backend: python app.py")
        print("   2. Start frontend: npm run dev")
        print("   3. Visit: http://localhost:3000")
        print("\n")

if __name__ == "__main__":
    # Install requests library if not available
    try:
        import requests
    except ImportError:
        print("❌ 'requests' library not found. Installing...")
        import subprocess
        subprocess.check_call(['pip', 'install', 'requests'])
        import requests
    
    init_database()