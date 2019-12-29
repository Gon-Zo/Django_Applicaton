import jwt


# SECRET_PRE = "내가설정한비밀키값"
#
#
# def validate_token(token, github_token):
#     try:
#         jwt.decode(token, SECRET_PRE + github_token, algorithms='HS256')
#     except jwt.ExpiredSignatureError:
#         return status.HTTP_401_UNAUTHORIZED
#     except jwt.InvalidTokenError:
#         return status.HTTP_401_UNAUTHORIZED
#     else:
#         return True

# User Info Decoding Jwt
def __decode_jwt__(jwtStr):
    a = jwt.decode(jwtStr, 'secret', algorithms=['HS256'])
    pass


# User Info Encoding Jwt
def __encode_jwt__(user):
    encoded_jwt = jwt.encode(render(user), 'secret', algorithm='HS256')
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
