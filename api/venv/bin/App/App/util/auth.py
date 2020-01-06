# 인증 관련
import jwt
from App.conf.setting import __open_key__
from App.util.comm import ReqJSONRenderer

# 비밀키
SECRET_KEY = __open_key__()


# User Info Decoding Jwt
def __decode_jwt__(jwtStr):
    try:
        jwt.decode(jwtStr, SECRET_KEY, algorithms=['HS256'])
        return ReqJSONRenderer({"state": True, "msg": "Success To Auth"}, status=200)
    except jwt.ExpiredSignatureError:
        return ReqJSONRenderer({"state": False, "error_msg": "Fail To Auth"}, status=405)
    except jwt.InvalidTokenError:
        return ReqJSONRenderer({"state": False, "error_msg": "Fail To Auth"}, status=405)


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
        "regdate": str(user[0].regdate)
    }


# 인증 관련한 함수
def __token_auth__(request):
    token = request.META.get('HTTP_AUTHORIZATION')
    token = token.replace("Bearer ", "", 1)
    if token is None:
        return ReqJSONRenderer({"state": False, "error_msg": "Not Token"}, status=405)
    return __decode_jwt__(token)
