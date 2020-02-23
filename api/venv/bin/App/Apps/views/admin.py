from rest_framework.response import Response
# User
# from User.models import User
# from User.serializers import UserSerializer
# Store
# from Store.models import Store
# from Store.serializers import StoreSerializer
# Review
# from Review.models import Review
# from Review.serializers import ReviewSerializer
# Proudct
# from Product.models import Product
# from Product.serializers import ProductSerializer


from Apps.models.user import User
from Apps.serializers.user import UserSerializer


from Apps.models.store import Store
from Apps.serializers.store import StoreSerializer


from Apps.models.review import Review
from Apps.serializers.review import ReviewSerializer

from Apps.models.product import Product
from Apps.serializers.product import ProductSerializer

from django.core.paginator import Paginator
from rest_framework.decorators import api_view
from rest_framework.decorators import throttle_classes
from App.util.comm import param_parser
from App.util.comm import image_as_base64
from rest_framework.exceptions import APIException
# 트랜잭션
from django.db import transaction


# Admin User
@api_view(['GET'])
@transaction.atomic
def user_api(request):
    method = request.method
    if method == 'GET':
        type = request.GET.get('type', 'U')
        pageNum = request.GET.get("pageNum", '10')
        page = request.GET.get("page", '1')
        # if Not type  is  'U':
        if not type is 'U':
            raise APIException("TYPE IS ERROR")
        else:
            user = User.objects.filter(type=type).order_by('seq')
            # paging
            page_list = Paginator(user, pageNum)
            page_data = page_list.page(page)
            serializer = UserSerializer(page_data, many=True)
            temp_array = serializer.data

            for t in temp_array:
                src = "App" + t['img']
                t['img'] = image_as_base64(src)

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


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def product_api(request):
    method = request.method

    if method == 'GET':
        product = Product.objects.all().order_by('seq')
        pageNum = request.GET.get('pageNum')
        page = request.GET.get('page')
        page_list = Paginator(product, pageNum)
        page_data = page_list.page(page)
        serializer = ProductSerializer(page_data, many=True)
        temp = {
            "count": page_list.count,
            "numPages": page_list.num_pages,
            "data": serializer.data
        }
        return Response(temp, status=200)
    elif method == 'POST':
        pass
    elif method == 'PUT':
        pass
    elif method == 'DELETE':
        pass
    else:
        return Response(status=404)

    # class ItemApi(APIView):
#
#     # Item - list
#     def get(self, request):
#         pass
# class StoreApi(APIView):
#     # store view list
#     def get(self, requset):
#         pass
