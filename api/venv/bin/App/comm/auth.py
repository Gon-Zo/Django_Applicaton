import jwt
from django.http import HttpResponse

SECRET_KEY = 'rhd#6a-k2m42qgf^sk6yx(r!%s5utd3+w=@0ew(fr2*mqh#+ke'


# User Info Decoding Jwt
def __decode_jwt__(jwtStr):
    try:
        a = jwt.decode(jwtStr, SECRET_KEY, algorithms=['HS256'])
        print(a)
    except jwt.ExpiredSignatureError:
        return HttpResponse(status=401)
    except jwt.InvalidTokenError:
        return HttpResponse(status=401)
    else:
        return True


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
