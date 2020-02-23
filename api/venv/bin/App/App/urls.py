from django.urls import path
import os, sys

sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

# User
# from User.views import UserApi, UserRestApi, Login
# Store
# from Store.views import StoreApi, StoreRestApi
# Item
# from Item.views import ItemApi, ItemRestApi
# Basket
# from Basket.views import BasketApi

# Image
# from Image.views import ImageApi

# Category
# from Category.views import CategoryApi

# Aamin
# from Admin.views import user_api
# from Admin.views import user_rest_api
# from Admin.views import store_rest_api
# from Admin.views import review_api
#
# from User.views import user_login

from Apps.views.admin import user_api
from Apps.views.admin import user_rest_api
from Apps.views.admin import store_rest_api
from Apps.views.admin import review_api
from Apps.views.client import user_login



urlpatterns = [

    # Admin
    path('api/admin/user', user_api),

    path('api/admin/user/<int:seq>', user_rest_api),

    path('api/admin/store/<int:seq>', store_rest_api),

    path('api/admin/review', review_api),

    path('api/login', user_login),

    ####################### URL #######################

    # user
    # path('api/user', UserApi.as_view()),
    # path('api/user/<int:seq>', UserRestApi.as_view()),
    # login
    # store
    # path('api/store', StoreApi.as_view()),
    # path('api/store/<int:seq>', StoreRestApi.as_view()),
    # item
    # path('api/item', ItemApi.as_view()),
    # path('api/item/<int:seq>', ItemRestApi.as_view()),

    # Basket
    # path('api/basket', BasketApi.as_view()),

    # Image
    # path('api/image', ImageApi.as_view()),

    # Category
    # path('api/category', CategoryApi.as_view()),

    # path('test/image', ImageApi.as_view(), document_root=MEDIA_ROOT)

]
