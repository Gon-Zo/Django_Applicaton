from django.urls import path
import os, sys

sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

# User
from User.views import UserApi, UserApi2, Login
# Store
from Store.views import StoreApi, StoreRestApi
# Item
from Item.views import ItemApi, ItemRestApi
# Basket
from Basket.views import BasketApi

# Image
from Image.views import ImageApi

# from App.conf.base import MEDIA_ROOT

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

    # Basket
    path('api/basket', BasketApi.as_view()),

    # Image
    path('api/image', ImageApi.as_view()),

    # path('test/image', ImageApi.as_view(), document_root=MEDIA_ROOT)
]
