from django.urls import path
import os, sys

sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))

from Apps.views.admin import user_api
from Apps.views.admin import user_rest_api
from Apps.views.admin import store_rest_api
from Apps.views.admin import review_api
from Apps.views.client import user_login
from Apps.views.admin import product_api
from Apps.views.admin import product_rest_api
from Apps.views.admin import category_api
from Apps.views.admin import image_rest_api

urlpatterns = [

    path('api/login', user_login),

    # Admin
    path('api/admin/user', user_api),

    path('api/admin/user/<int:seq>', user_rest_api),

    path('api/admin/product', product_api),

    path('api/admin/product/<int:seq>', product_rest_api),

    path('api/admin/store/<int:seq>', store_rest_api),

    path('api/admin/review', review_api),

    path('api/admin/category', category_api),

    path('api/admin/img/<int:seq>', image_rest_api),

]



