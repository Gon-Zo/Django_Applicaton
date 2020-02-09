# from django.shortcuts import render
#
# # Create your views here.
# from rest_framework.views import APIView
#
# from rest_framework.response import Response
# from .models import Basket
# from .form import BasketForm
# from App.util.comm import param_parser
# from App.util.ResponseMsg import (BASKET_SUCCESS, USER_SUCCESS ,
#                                   BASKET_FAIL)
# from User.models import User
# from Item.models import Item
#
#
# class BasketApi(APIView):
#     def get(self, request):
#         pass
#
#     def post(self, request):
#         user = request.GET.get('user')
#         item = request.GET.get('item')
#         users = User.objects.filter(seq=user)
#         items = Item.objects.filter(seq=item)
#         Basket.objects.create(item=items.get(), user=users.get())
#         return Response(BASKET_SUCCESS, status=200)
