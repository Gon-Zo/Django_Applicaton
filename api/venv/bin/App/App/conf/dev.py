# 개발 세팅
from .base import *
from App.conf.setting import __get_db_conf__, __open_key__
from django.core.management.commands.runserver import Command as runserver

# 기본 포트 설정
runserver.default_port = "3030"

# 시크릿 키 설정
SECRET_KEY = __open_key__()

# 디버그 모드 : TRUE
DEBUG = True

# 혀용 호스트
ALLOWED_HOSTS = ['localhost', '127.0.0.1']

# 데이터 베이스 정보
DATABASES = __get_db_conf__()

# 커스텀 미들웨어
MY_MIDDLEWARE = [
    # 'App.util.ResponseFormattingMiddleware.ResponseFormattingMiddleware',
]

REST_FRAMEWORK = {
    'EXCEPTION_HANDLER': 'App.util.exception_handlers.get_exception_handler'
}

# 미들웨어 설정
MIDDLEWARE = [
                 'django.middleware.security.SecurityMiddleware',
                 'django.contrib.sessions.middleware.SessionMiddleware',
                 'django.middleware.common.CommonMiddleware',
                 'django.middleware.csrf.CsrfViewMiddleware',
                 'django.contrib.auth.middleware.AuthenticationMiddleware',
                 'django.contrib.messages.middleware.MessageMiddleware',
                 'django.middleware.clickjacking.XFrameOptionsMiddleware',
                 'corsheaders.middleware.CorsMiddleware',
                 # "debug_toolbar.middleware.DebugToolbarMiddleware"
             ] + MY_MIDDLEWARE

WSGI_APPLICATION = 'App.wsgi.application'

# ??
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

ROOT_URLCONF = 'App.urls'

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

STATIC_URL = '/static/'

LOGGING = {
    'version': 1,
    'filters': {
        'require_debug_true': {
            '()': 'django.utils.log.RequireDebugTrue',
        }
    },
    'handlers': {
        'console': {
            'level': 'DEBUG',
            'filters': ['require_debug_true'],
            'class': 'logging.StreamHandler',
        }
    },
    'loggers': {
        'django.db.backends': {
            'level': 'DEBUG',
            'handlers': ['console'],
        }
    }
}
