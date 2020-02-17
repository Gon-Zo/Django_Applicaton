# 인증 관련
import jwt
from App.conf.setting import __open_key__
import datetime
from App.util.app_exception import AppException

# 비밀키
SECRET_KEY = __open_key__()


# User Info Decoding Jwt
def __decode_jwt__(jwtStr):
    pass


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
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
    }


# 인증 관련한 함수
def __token_auth__(token):
    if not token is None:
        token = token.replace("Bearer ", "", 1)
        a = jwt.decode(token, SECRET_KEY, leeway=datetime.timedelta(hours=1), algorithms=['HS256'])
    else:
        raise AppException()
