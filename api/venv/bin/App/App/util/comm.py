from django.http import HttpResponse
from rest_framework.renderers import JSONRenderer


class ReqJSONRenderer(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(ReqJSONRenderer, self).__init__(content, **kwargs)
