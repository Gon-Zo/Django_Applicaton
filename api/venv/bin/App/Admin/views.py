# Create your views here.
from rest_framework.response import Response
# User
from User.models import User
from User.serializers import UserSerializer
# Store
from Store.models import Store
from Store.serializers import StoreSerializer
# Review
from Review.models import Review
from Review.serializers import ReviewSerializer

from django.core.paginator import Paginator
from rest_framework.exceptions import APIException
from rest_framework.decorators import api_view, throttle_classes
from App.util.comm import param_parser
from django.core.files import File

# 트랜잭션
from django.db import transaction

# from base64 import b64decode

import os
import base64


def image_as_base64(src, format='png'):
    encoded_string = ''
    with open(src, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read())
    return encoded_string


# Admin User
@api_view(['GET'])
# @transaction.atomic
def user_api(request):
    method = request.method
    if method == 'GET':
        type = request.GET.get('type', 'U')
        pageNum = request.GET.get("pageNum", '10')
        page = request.GET.get("page", '1')
        if type is 'M':
            raise APIException("TYPE IS ERROR")
        else:
            user = User.objects.filter(type=type).order_by('seq')
            # paging
            page_list = Paginator(user, pageNum)
            a = page_list.page(page)
            serializer = UserSerializer(a, many=True)
            temp_array = serializer.data

            for t in temp_array:
                src = 'App' + t['img']
                base = image_as_base64(src)
                t['img'] = base

            temp = {
                "count": page_list.count,
                "numPages": page_list.num_pages,
                "data": temp_array,
            }
            return Response(temp, status=200)
    else:
        return Response(status=404)


# rest api
@api_view(['GET', 'PUT', 'DELETE'])
@transaction.atomic
def user_rest_api(request, seq):
    method = request.method
    user = User.objects.filter(seq=seq)
    if method == 'GET':
        user_serializer = UserSerializer(user, many=True)
        return Response(user_serializer.data, status=200)
    elif method == 'PUT':
        data = param_parser(request.GET)
        user.update(**data)
        return Response({"seq": seq}, status=200)
    elif method == 'DELETE':
        user.delete()
        return Response({"seq": seq}, status=200)
    else:
        return Response(status=404)


@api_view(['GET', 'PUT', 'DELETE'])
@transaction.atomic
def store_rest_api(request, seq):
    method = request.method
    store = Store.objects.filter(seq=seq)
    if method == 'GET':
        store_serializer = StoreSerializer(store, many=True)
        return Response(store_serializer.data, status=200)
    elif method == 'PUT':
        data = param_parser(request.GET)
        store.update(**data)
        return Response({"seq": seq}, status=200)
    elif method == 'DELETE':
        store.delete()
        return Response({"seq": seq}, status=200)
    else:
        return Response(status=404)


@api_view(['GET'])
def review_api(request):
    method = request.method
    if method == 'GET':
        # param
        store_seq = request.GET.get('storeSeq')
        pageNum = request.GET.get('pageNum')
        page = request.GET.get('page')
        #
        store = Store.objects.filter(seq=store_seq)
        review = Review.objects.filter(store=store)
        pageObj = Paginator(review, pageNum)
        p = pageObj.page(page)
        review_serializer = ReviewSerializer(p, many=True)
        temp = {
            "count": pageObj.count,
            "numPages": pageObj.num_pages,
            "data": review_serializer.data
        }
        return Response(temp, status=200)
    else:
        return Response(status=404)

# class ItemApi(APIView):
#
#     # Item - list
#     def get(self, request):
#         pass
#
#
# class StoreApi(APIView):
#     # store view list
#     def get(self, requset):
#         pass
