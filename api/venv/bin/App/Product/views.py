from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product
from App.util.comm import param_parser
# from App.util.ResponseMsg import (RESULT_LIST, ITEM_SUCCESS, ITEM_FAIL)
from .serializers import ProductSerializer


class ProductApi(APIView):

    # Product All List & Store's Product List
    def get(self, request):
        Product = Product.objects.all()
        serializer = ProductSerializer(Product, many=True)
        return Response(RESULT_LIST(serializer.data), status=200)

    # Product save
    def post(self, request):
        data = param_parser(request.GET)
        Product.objects.create(**data)
        return Response(ITEM_SUCCESS, status=200)


class ItemRestApi(APIView):

    # detail Product Info
    def get(self, request, seq):
        Product = Product.objects.filter(seq=seq)
        serializer = ItemSerializer(Product, many=True)
        return Response(RESULT_LIST(serializer.data), status=200)

    # Product update
    def put(self, request, seq):
        data = param_parser(request.GET)
        Product = Product.objects.filter(seq=seq)
        Product.update(**data)
        return Response(ITEM_SUCCESS, status=200)

    # one Product delete
    def delete(self, request, seq):
        Product = Product.objects.filter(seq=seq)
        if not Product:
            return Response(ITEM_FAIL, status=500)
        return Response(ITEM_SUCCESS, status=200)
