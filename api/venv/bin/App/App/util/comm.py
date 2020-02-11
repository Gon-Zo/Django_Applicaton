from django.http import HttpResponse
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from App.util.ResponseMsg import (EXCEPTION_DETAIL)
import base64
from django.core.files.base import ContentFile


#  JSON 랜더링 함수
class ReqJSONRenderer(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(ReqJSONRenderer, self).__init__(content, **kwargs)


# 랜더링 객체
class Result:
    def __init__(self, status, result, data):
        self.status = status
        self.result = result
        self.data = data

    def __render_response__(self):
        return ReqJSONRenderer({"status": self.status, "result": self.result, "data": self.data}, status=self.status)


# 파라미터 랜더링
def param_parser(data):
    temp = {}
    try:
        for key in data:
            value = data[key]
            temp.setdefault(key, value)
    except Exception as e:
        return Response(EXCEPTION_DETAIL(e), status=500)

    return temp


# image render
def image_as_base64(src, format='png'):
    encoded_string = ''
    print(src)
    print(">>>>>>>>>>>>>")
    with open(src, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read())
    return encoded_string


# temp_array = list(map(lambda m: image_as_base64(m['img'])), temp_array)

# "seq": -13,
# "id": "test1",
# "pwd": "1234",
# "name": "tester1",
# "birthDate": "2020-02-12",
# "address": "test,,,,,,,,,",
# "type": "U",
# "img": "/media/blog/profile_pic/default.png",
# "is_use": true,
# "create_at": "2020-02-10T00:00:00Z"

class Test:
    def __init__(self, seq, id, pwd, name, birthDate, address, type, img, is_use, create_at):
        self.seq = seq
        self.id = id
        self.pwd = pwd
        self.name = name
        self.birthDate = birthDate
        self.address = address
        self.type = type
        self.img = img
        self.is_use = is_use
        self.create_at = create_at
