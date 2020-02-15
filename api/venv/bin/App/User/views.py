# from rest_framework.views import APIView
# from rest_framework.response import Response
# from .models import User
# from .serializers import UserSerializer
# from App.util.comm import param_parser
# from App.util.ResponseMsg import (RESULT_LIST,
#                                   EXCEPTION_DETAIL,
#                                   USER_SUCCESS,
#                                   OBJECT_IS_NONE,
#                                   LOGIN_FAIL,
#                                   LOGIN_SUCCESS)
#
#
# class UserApi(APIView):
#
#     # Type is User Type
#     # IF type is None App User List
#     # Type is not None Type filter User List
#     def get(self, request):
#         type = request.GET.get('type', '')
#         page = request.GET.get('page', '1')
#         page_num = request.GET.get('pageNum', '10')
#         user = _user_object_(type)
#         # paging
#         page_list = Paginator(user, page_num)
#         a = page_list.page(page)
#         serializer = UserSerializer(a, many=True)
#         temp = {
#             "count": page_list.count,
#             "numPages": page_list.num_pages,
#             "data": serializer.data,
#         }
#         return Response(RESULT_LIST(temp), status=200)
#
#     #  User sign up
#     def post(self, request):
#         data = param_parser(request.GET)
#         try:
#             User.objects.create(**data)
#         except Exception as e:
#             return Response(EXCEPTION_DETAIL(e), status=500)
#
#         return Response(USER_SUCCESS, status=200)
#
#
# class UserRestApi(APIView):
#
#     # 유저 상세
#     def get(self, request, seq):
#         user = user_object(seq=seq)
#         if not user:
#             # User is temp
#             return Response(OBJECT_IS_NONE, status=500)
#         else:
#             serializer = UserSerializer(user, many=True)
#             return Response(RESULT_LIST(serializer.data), status=200)
#
#     # 유저 정보 수정
#     def put(self, request, seq):
#         user = user_object(seq=seq)
#         data = param_parser(request.GET)
#         user.update(**data)
#         return Response(USER_SUCCESS, status=200)
#
#     # User Delete
#     def delete(self, request, seq):
#         user = user_object(seq=seq)
#         if not user:
#             return Response(OBJECT_IS_NONE, status=500)
#         else:
#             user.delete()
#             return Response(USER_SUCCESS, status=200)
#
#
from rest_framework.response import Response
from User.models import User
from App.util.comm import param_parser
from App.util.auth import __encode_jwt__
from rest_framework.decorators import api_view

# 트랜잭션
from django.db import transaction

@api_view(['POST'])
@transaction.atomic
def user_login(request):
    method = request.method
    if method == 'POST':
        data = param_parser(request.GET)
        user = User.objects.filter(**data)
        jwt = __encode_jwt__(user[0])
        return Response(jwt,status=200)
    else:
        return Response(status=404)


# class Login(APIView):
#
#     # User Login
#     def post(self, request):
#         data = param_parser(request.POST)
#         user = User.objects.filter(**data)
#         if not user:
#             return Response(LOGIN_FAIL, status=500)
#
#         jwt = __encode_jwt__(user)
#         return Response(LOGIN_SUCCESS(jwt))

#
# def user_object(seq):
#     return User.objects.filter(seq=seq)
#
#
# # User List to check type
# # return type is Object ( User )
# def _user_object_(type):
#     if type == '':
#         return User.objects.get_queryset().order_by('seq')
#     else:
#         return User.objects.filter(type=type)
