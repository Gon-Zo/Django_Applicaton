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
    'App.util.ResponseFormattingMiddleware.ResponseFormattingMiddleware'
    # 'App.util.TestMiddleware.TestMiddleware'
    # 'App.util.test.StartMiddleware'
]

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

# ???
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

# # logging
# LOGGING = {
#     'version': 1,
#     # 기존의 로깅 설정을 비활성화 할 것인가?
#     'disable_existing_loggers': False,
#
#     # 포맷터
#     # 로그 레코드는 최종적으로 텍스트로 표현됨
#     # 이 텍스트의 포맷 형식 정의
#     # 여러 포맷 정의 가능
#     'formatters': {
#         'format1': {
#             'format': '[%(asctime)s] %(levelname)s [%(name)s:%(lineno)s] %(message)s',
#             'datefmt': '%d/%b/%Y %H:%M:%S'
#         },
#         'format2': {
#             'format': '%(levelname)s %(message)s'
#         },
#     },
#
#     # # 핸들러
#     # # 로그 레코드로 무슨 작업을 할 것인지 정의
#     # # 여러 핸들러 정의 가능
#     # 'handlers': {
#     #     # 로그 파일을 만들어 텍스트로 로그레코드 저장
#     #     'file': {
#     #         'level': 'DEBUG',
#     #         'class': 'logging.FileHandler',
#     #         'filename': os.path.join(BASE_DIR, 'logs/logfile'),
#     #         'formatter': 'format1',
#     #     },
#     #     # 콘솔(터미널)에 출력
#     #     'console': {
#     #         'level': 'DEBUG',
#     #         'class': 'logging.StreamHandler',
#     #         'formatter': 'format2',
#     #     }
#     # },
#
#     # 로거
#     # 로그 레코드 저장소
#     # 로거를 이름별로 정의
#     # 'loggers': {
#     #     'polls': {
#     #         'handlers': ['file'],
#     #         'level': 'DEBUG',
#     #     },
#     #     'books': {
#     #         'handlers': ['console'],
#     #         'level': 'DEBUG',
#     #     }
#     # },
# }

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

# #
# LOGGING = {
#     'version': 1,
#     'formatters': {
#         'default': {
#             'format': "[%(asctime)s] %(levelname)s [%(name)s:%(lineno)s] %(message)s",
#             'datefmt': "%Y-%m-%d %H:%M:%S"
#         },
#     },
#     'filters': {
#         'require_debug_true': {
#             '()': 'django.utils.log.RequireDebugTrue',
#         }
#     },
#     'handlers': {
#         'console': {
#             'level': 'DEBUG',
#             'filters': ['require_debug_true'],
#             'class': 'logging.StreamHandler',
#         }
#     },
#     'loggers': {
#         'django.db.backends': {
#             'level': 'DEBUG',
#             'handlers': ['console'],
#         }
#     }
# }
