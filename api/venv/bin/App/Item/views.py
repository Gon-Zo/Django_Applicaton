from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Item
from App.util.comm import param_parser
from App.util.ResponseMsg import *
from .serializers import ItemSerializer


class ItemApi(APIView):

    # Item All List & Store's Item List
    def get(self, request):
        item = Item.objects.all()
        serializer = ItemSerializer(item, many=True)
        return Response(RESULT_LIST(serializer.data), status=200)

    # Item save
    def post(self, request):
        data = param_parser(request.GET)
        Item.objects.create(**data)
        return Response(ITEM_SUCCESS, status=200)


class ItemRestApi(APIView):

    # detail item Info
    def get(self, request, seq):
        item = Item.objects.filter(seq=seq)
        serializer = ItemSerializer(item, many=True)
        return Response(RESULT_LIST(serializer.data), status=200)

    # item update
    def put(self, request, seq):
        data = param_parser(request.GET)
        item = Item.objects.filter(seq=seq)
        item.update(**data)
        return Response(ITEM_SUCCESS, status=200)

    # one item delete
    def delete(self, request, seq):
        item = Item.objects.filter(seq=seq)
        if not item:
            return Response(ITEM_FAIL, status=500)
        return Response(ITEM_SUCCESS, status=200)
