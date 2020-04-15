from rest_framework.response import Response
from Apps.models.user import User
from App.util.comm import param_parser
from App.util.auth import __encode_jwt__
from rest_framework.decorators import api_view
import json
# 트랜잭션
from django.db import transaction

from App.util.app_exception import AppException

from django.shortcuts import render

def test(request):
    return render(request , 'index.html')


@api_view(['POST'])
@transaction.atomic
def user_login(request):
    method = request.method
    if method == 'POST':
        data = json.loads(request.body)
        try:
            user = User.objects.filter(**data)
            jwt = __encode_jwt__(user[0])
        except IndexError:
            raise AppException("IS NOT USER")

        return Response(jwt, status=200)
    else:
        return Response(status=404)
