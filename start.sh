#!/bin/bash

echo "🚀 Starting Raydex Blog..."
echo ""

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3.8 or higher."
    exit 1
fi

echo "✅ Python found: $(python3 --version)"
echo ""

# Check if dependencies are installed
echo "📦 Checking dependencies..."
python3 -c "import flask, flask_sqlalchemy, flask_cors, jwt" 2>/dev/null

if [ $? -ne 0 ]; then
    echo "⚠️  Some dependencies are missing. Installing..."
    pip3 install flask flask-sqlalchemy flask-cors pyjwt werkzeug
    echo ""
fi

echo "✅ All dependencies installed"
echo ""

# Create static/uploads directory if it doesn't exist
mkdir -p static/uploads

# Start the application
echo "🌐 Starting server at http://localhost:5000"
echo ""
echo "📌 Default admin credentials:"
echo "   Email: admin@raydex.com"
echo "   Password: admin123"
echo ""
echo "⚠️  Change the admin password after first login!"
echo ""
echo "Press Ctrl+C to stop the server"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

python3 app.py
