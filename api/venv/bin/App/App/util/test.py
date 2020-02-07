import re
from rest_framework.status import is_client_error, is_success

from django.http import HttpResponse
import json


class ResponseFormattingMiddleware:
    METHOD = ('GET', 'POST', 'PUT', 'PATCH', 'DELETE')

    def __init__(self, get_response):
        self.get_response = get_response
        self.API_URLS = [
            re.compile(r'^(.*)/api'),
            re.compile(r'^api'),
        ]

    def __call__(self, request):
        response = None
        if not response:
            response = self.get_response(request)
        if hasattr(self, 'process_response'):
            response = self.process_response(request, response)
        return response

    def process_response(self, request, response):
        path = request.path_info.lstrip('/')
        valid_urls = (url.match(path) for url in self.API_URLS)

        # print(request.path_info)
        # jwt = request.META.get('HTTP_AUTHORIZATION')

        if request.method in self.METHOD and any(valid_urls):
            status_code = response.status_code

            # __decode_jwt__(jwt)

            if not is_success(status_code):

                if status_code == 404:
                    data = {"status": status_code, "detail": "Page Not Found"}
                elif status_code == 500:
                    if response.data is None:
                        data = {"status": status_code, "detail": "server internal error"}
                    else:
                        data = response.data

                return HttpResponse(json.dumps(data), content_type="application/json", status=status_code)

        return response
