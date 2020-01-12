from django.urls import path
import os, sys

sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

from User.views import UserApi, UserApi2, Login
from Store.views import StoreApi, StoreRestApi
from Item.views import ItemApi, ItemRestApi

urlpatterns = [
    # user
    path('api/user', UserApi.as_view()),
    path('api/user/<int:seq>', UserApi2.as_view()),
    # login
    path('api/login', Login.as_view()),
    # store
    path('api/store', StoreApi.as_view()),
    path('api/store/<int:seq>', StoreRestApi.as_view()),
    # item
    path('api/item', ItemApi.as_view()),
    path('api/item/<int:seq>', ItemRestApi.as_view()),
]
