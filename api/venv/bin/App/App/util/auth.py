# 인증 관련
import jwt
from App.conf.setting import __open_key__
import datetime

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
        # 1 시간
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
    }

