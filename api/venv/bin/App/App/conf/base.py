import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# CORS_ORIGIN_ALLOW_ALL
CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True
CORS_ORIGIN_WHITELIST = (
    'localhost:3030',
    '127.0.0.1:3030'
)

# Market Application to Setting
MY_APPLICATION = [
    'User',
    'Store',
    'Product',
    'Category',
    'Image',
    'Basket',
    'Like',
    'Review',
    'Question',
]

# Install pip
ADD_PLUGIN = [
    'django_jenkins',
    'rest_framework',
]

# ALL Application
INSTALLED_APPS = MY_APPLICATION + ADD_PLUGIN + [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

MEDIA_URL = '/media/'

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
