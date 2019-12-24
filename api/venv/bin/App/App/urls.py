from django.urls import path
import os, sys

sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
from User.views import UserApi, UserApi2

# import store.views
# import item.views
# import review.views

urlpatterns = [
    # user
    path('api/user', UserApi.as_view()),
    path('api/user/<int:seq>', UserApi2.as_view()),

    # store
    # path('api/store', store.views.StoreApi.as_view()),
    # path('api/store/<int:seq>', store.views.StoreApi2.as_view()),

    # # Item
    # path('api/item', item.views.ItemApi.as_view()),
    # path('api/item/<int:seq>', item.views.ItemApi2.as_view()),

    # # ReView
    # path('api/review', review.views.ReviewApi.as_view()),
    # path('api/review/<int:seq>', review.views.ReviewApi2.as_view()),

    # login
    # path('api/login', user.views.Login.as_view()),

]
