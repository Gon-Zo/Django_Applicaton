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
    try:
        a = jwt.decode(token, SECRET_KEY,
                       leeway=datetime.timedelta(seconds=30),
                       algorithms=['HS256'])
    except jwt.ExpiredSignatureError as e:
        raise jwt.ExpiredSignatureError

# return __decode_jwt__(token)
