from django.urls import path
import os, sys

sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

from User.views import UserApi, UserApi2, Login

urlpatterns = [
    # user
    path('api/user', UserApi.as_view()),
    path('api/user/<int:seq>', UserApi2.as_view()),
    # login
    path('api/login', Login.as_view()),
]
