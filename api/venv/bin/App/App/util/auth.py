# 인증 관련
import jwt
from App.conf.setting import __open_key__
from App.util.comm import ReqJSONRenderer
import datetime
from rest_framework.response import Response

# 비밀키
SECRET_KEY = __open_key__()


# User Info Decoding Jwt
def __decode_jwt__(jwtStr):
    try:
        a = jwt.decode(jwtStr, SECRET_KEY, algorithms=['HS256'])
        return True
    except jwt.ExpiredSignatureError as e:
        return Response({'detail': e}, status=500)
    except a is None:
        return False


    # try:
    #     if jwt.decode(jwtStr, SECRET_KEY, algorithms=['HS256']) is None:
    #         return False
    #     else:
    #         return True
    # except jwt.ExpiredSignatureError as e:
    #     return Response({"detail": e}, status=500)


# try:
#     jwt.decode(jwtStr, SECRET_KEY, algorithms=['HS256'])
#     return ReqJSONRenderer({"state": True, "msg": "Success To Auth"}, status=200)
# except jwt.ExpiredSignatureError:
#     return ReqJSONRenderer({"state": False, "error_msg": "Fail To Auth"}, status=405)
# except jwt.InvalidTokenError:
#     return ReqJSONRenderer({"state": False, "error_msg": "Fail To Auth"}, status=405)


# User Info Encoding Jwt
def __encode_jwt__(user):
    encoded_jwt = jwt.encode(render(user), SECRET_KEY, algorithm='HS256')
    return encoded_jwt.decode('utf-8')


def render(user):
    return {
        "seq": user[0].seq,
        "id": user[0].id,
        "pwd": user[0].pwd,
        "name": user[0].name,
        "birthDate": str(user[0].birthDate),
        "address": user[0].address,
        "type": user[0].type,
        "use_yn": user[0].use_yn,
        "regdate": str(user[0].regdate),
        # 30 초 유효 기간
        'exp': datetime.datetime.utcnow() + datetime.timedelta(seconds=30)
    }


# 인증 관련한 함수
def __token_auth__(token):
    token = token.replace("Bearer ", "", 1)
    return __decode_jwt__(token)

    # token = request.META.get('HTTP_AUTHORIZATION')
    # token = token.replace("Bearer ", "", 1)
    # if token is None:
    #     return ReqJSONRenderer({"state": False, "error_msg": "Not Token"}, status=405)
    # return __decode_jwt__(token)
