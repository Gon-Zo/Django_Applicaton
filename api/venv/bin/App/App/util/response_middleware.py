import re
import jwt
import datetime
from django.http import JsonResponse
from App.conf.setting import __open_key__

# from rest_framework.status import is_success

SECRET_KEY = __open_key__()


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

    def process_view(self, request, view_func, view_args, view_kwargs):
        path = request.path_info.lstrip('/')

        if 'login' not in path:
            auth = request.META.get('HTTP_AUTHORIZATION')
            status = 500
            authFormat = {"status": status, "detail": None},
            # 인증 관련
            # if auth is None:
            #     detail = "JWT NONE"
            #     return JsonResponse({"status": status, "detail": detail}, status=status)
            # else:
            #     token = auth.replace("Bearer ", "", 1)
            #     try:
            #         jwt.decode(token, SECRET_KEY, leeway=datetime.timedelta(hours=1), algorithms=['HS256'])
            #     except jwt.ExpiredSignatureError as e:
            #         return JsonResponse({"status": status, "detail": str(e)}, status=status)
            #     except jwt.InvalidTokenError as e:
            #         return JsonResponse({"status": status, "detail": str(e)}, status=status)

    def process_response(self, request, response):
        path = request.path_info.lstrip('/')
        valid_urls = (url.match(path) for url in self.API_URLS)
        if request.method in self.METHOD and any(valid_urls):
            status_code = response.status_code

        return response
