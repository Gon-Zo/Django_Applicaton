from django.http import HttpResponse
from rest_framework.renderers import JSONRenderer


class JSONParser(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONParser, self).__init__(content, **kwargs)
