# 인증 관련
import jwt
from App.conf.setting import __open_key__
import datetime

from rest_framework.exceptions import APIException

# 비밀키
SECRET_KEY = __open_key__()


# jwt.decode(jwt_payload, 'secret', leeway=datetime.timedelta(seconds=10), algorithms=['HS256'])

# User Info Decoding Jwt
def __decode_jwt__(jwtStr):
    print("Token Test")
    if jwtStr is None:
        print("TEST SUCCESS ... ")
        # print("TEST ...")
        # data = {"status": 500, "detail": "JWT IS NONE"}
        # return HttpResponse(json.dumps(data), content_type="application/json", status=500)

    # if jwtStr is None:
    #     raise APIException("Token none")

    pass

    #
    # try:
    #     a = jwt.decode(jwtStr, SECRET_KEY,
    #                    leeway=datetime.timedelta(seconds=30),
    #                    algorithms=['HS256'])
    #     print(">>>>>>>>>>>>>>>>>>>>")
    #     print(a)
    #     return True
    # except jwt.ExpiredSignatureError as e:
    #     # print(">>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<< THIS")
    #     # print(e)
    #     # raise jwt.ExpiredSignatureError()
    #     return Response({'detail': e}, status=500)
    # except a is None:
    #     print("None !!")
    #     return False


# User Info Encoding Jwt
def __encode_jwt__(user):
    encoded_jwt = jwt.encode(render(user), SECRET_KEY, algorithm='HS256')
    return encoded_jwt.decode('utf-8')


def render(user):

    return {
        "seq": user.seq,
        "id": user.id,
        "pwd": user.pwd,
        "name": user.name,
        "birthDate": str(user.birthDate),
        "address": user.address,
        "type": user.type,
        "is_use": user.is_use,
        "create_at": str(user.create_at),
        # 30 초 유효 기간
        'exp': datetime.datetime.utcnow() + datetime.timedelta(seconds=30)
    }


# 인증 관련한 함수
def __token_auth__(token):
    token = token.replace("Bearer ", "", 1)
    try:
        a = jwt.decode(token, SECRET_KEY,
                       leeway=datetime.timedelta(seconds=30),
                       algorithms=['HS256'])
    except jwt.ExpiredSignatureError as e:
        raise jwt.ExpiredSignatureError

# return __decode_jwt__(token)
