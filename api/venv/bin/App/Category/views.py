from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Category
from .models import ItemCategory
from Item.models import Item
from .serializers import CategorySerializer
from App.util.comm import param_parser
from App.util.ResponseMsg import (RESULT_LIST, EXCEPTION_DETAIL, CATEGORY_ITEM_FAIL, CATEGORY_ITEM_SUCCESS)


class CategoryApi(APIView):

    # Category List - order asc
    def get(self, request):
        # colName => asc
        # -colName => desc
        category = Category.objects.all().order_by('order')
        seializer = CategorySerializer(category, many=True)
        return Response(RESULT_LIST(seializer.data), status=200)

    def post(self, request):
        data = param_parser(request.GET)
        Category.objects.create(**data)
        return Response()


class CategoryRestApi(APIView):

    def put(self, request, seq):
        category = find_by(render_obj_seq(seq))
        data = param_parser(request.GET)
        try:
            category.update(**data)
        except Exception as e:
            return Response(EXCEPTION_DETAIL(e), status=500)

        return Response(CATEGORY_ITEM_SUCCESS, status=200)

    def delete(self, request, seq):
        category = find_by(render_obj_seq(seq))
        try:
            category.delete()
        except Exception as e:
            return Response(EXCEPTION_DETAIL(e), status=500)

        return Response(CATEGORY_ITEM_SUCCESS, status=200)


class ItemCategoryApi(APIView):

    # Mapping to item & category
    def post(self, request):
        category_seq = request.GET.get("category")
        item_seq = request.GET.get("item")

        item = Item.objects.filter(seq=item_seq)
        category = Category.objects.filter(seq=category_seq)
        try:
            ItemCategory.objects.create(category=category.get(), item=item.get())
        except Exception as e:
            return Response(EXCEPTION_DETAIL(e), status=500)

        return Response(CATEGORY_ITEM_SUCCESS, status=200)


# make to obj by seq
def render_obj_seq(seq):
    return {"seq": seq}


# model obj
def find_by(obj):
    return Category.objects.filter(**obj)
