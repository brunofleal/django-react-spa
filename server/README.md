# About
Based on https://medium.com/swlh/build-your-first-rest-api-with-django-rest-framework-e394e39a482c

# Requirements
- Python 3.10
- Django & Django Rest

# Setup
Initialize DB
- python manage.py migrate

# Auth
- python manage.py createsuperuser --email admin@example.com --username admin
- choose a password: eg:password1234
- login with l:admin p:password1234

# Startup
To start the server, run
- python manage.py runserver