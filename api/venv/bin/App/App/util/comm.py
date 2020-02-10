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
def base64_file(data, name=None):
    _format, _img_str = data.split(';base64,')
    _name, ext = _format.split('/')
    if not name:
        name = _name.split(":")[-1]
    return ContentFile(base64.b64decode(_img_str), name='{}.{}'.format(name, ext))
