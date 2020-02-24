import re
from rest_framework.status import is_success
from rest_framework.status import is_client_error
from rest_framework.status import is_server_error

# from django.http import HttpResponse
from App.util.auth import __token_auth__
from django.http import JsonResponse


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
        print(response)
        print(">>>>>>>>>>>>>>>>>>..")
        if hasattr(self, 'process_response'):
            response = self.process_response(request, response)

        return response

    # def process_request(self, request):
    #     self.debug_helper = {}
    #     self.debug_helper['process_request'] = {}
    #     self.debug_helper['process_request']['path'] = request.path

    def process_view(self, request, view_func, view_args, view_kwargs):
        # print(self._get_token(request))
        # jwt = request.META.get('HTTP_AUTHORIZATION')
        # if jwt is None:
        #     print(view_kwargs)
        #     print(">>>>>>>>>>>>>>..")
        pass

    #
    def process_exception(request, exception):
        print("test success")
        pass

    def process_response(self, request, response):
        path = request.path_info.lstrip('/')
        valid_urls = (url.match(path) for url in self.API_URLS)

        if request.method in self.METHOD and any(valid_urls):
            status_code = response.status_code
            print(status_code)
            if not is_success(status_code):
                if is_server_error(status_code):
                    return JsonResponse(data={"status": status_code, "detail": "Internal Server Error"},
                                        status=status_code)
                elif is_client_error(status_code):
                    return JsonResponse(data={"status": status_code, "detail": "Page Not Found"}, status=status_code)
        else:
            print("TEST ??? >")
            pass

        return response
# content_type="application/json"
