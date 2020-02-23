from rest_framework.response import Response
from User.models import User
from App.util.comm import param_parser
from App.util.auth import __encode_jwt__
from rest_framework.decorators import api_view
import json
# 트랜잭션
from django.db import transaction


@api_view(['POST'])
@transaction.atomic
def user_login(request):
    method = request.method
    if method == 'POST':
        data = json.loads(request.body)
        user = User.objects.filter(**data)
        jwt = __encode_jwt__(user[0])
        return Response(jwt, status=200)
    else:
        return Response(status=404)
