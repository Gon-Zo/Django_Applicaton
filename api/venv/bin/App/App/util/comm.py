from django.http import HttpResponse
from rest_framework.renderers import JSONRenderer


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
