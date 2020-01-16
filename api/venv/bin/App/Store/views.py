from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Store
from User.models import User
from .serializers import StoreSerializer
from App.util.comm import param_parser
from App.util.ResponseMsg import (RESULT_LIST,
                                  STORE_SUCCESS,
                                  OBJECT_IS_NONE)


class StoreApi(APIView):

    # Market List
    def get(self, request):
        user_seq = request.GET.get('user')
        store = user_check(user_seq)
        serializer = StoreSerializer(store, many=True)
        return Response(RESULT_LIST(serializer.data), status=200)

    # Market Save
    def post(self, request):
        print("POST SUCCESS TO")
        # data = param_parser(request.GET)
        # if
        # Store.objects.create(**data)
        data = param_parser(request.GET)
        print(data)
        print(data['user'])
        # print("before")
        a = data['user']
        u = User.objects.filter(seq=a)
        print(u.get())
        test = u.get()
        data.setdefault("test", test)
        # data.update(u.get())
        print(">>>>>>>>>>>>>")
        return Response(status=200)


class StoreRestApi(APIView):

    # Detail Market
    def get(self, request, seq):
        store = Store.objects.filter(seq=seq)
        serializer = StoreSerializer(store, many=True)
        return Response(RESULT_LIST(serializer.data), status=200)

    # Market Update
    def put(self, request, seq):
        store = Store.objects.fiter(seq=seq)
        data = (param_parser)(request.GET)
        store.update(**data)
        return Response(STORE_SUCCESS, status=200)

    # Market Remove
    def delete(self, request, seq):
        store = Store.objects.filter(seq=seq)
        if not store:
            return Response(OBJECT_IS_NONE, status=500)
        store.delete()
        return Response(STORE_SUCCESS, status=200)


# User Seq Checking
def user_check(user_seq):
    if user_seq == '':
        # All
        store = Store.objects.all()
    else:
        # User
        store = Store.objects.filter(user=user_seq)
    return store
