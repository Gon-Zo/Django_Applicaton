import re
from rest_framework.status import is_client_error, is_success


# from App.util.comm import ReqJSONRenderer


class TestMiddleware:
    METHOD = ('GET', 'POST', 'PUT', 'DELETE', 'PATCH')

    def __init__(self, get_response):
        self.get_response = get_response
        self.API_URLS = [
            re.compile(r'^(.*)/api'),
            re.compile(r'^api'),
        ];

    def __call__(self, request):
        response = None
        if not response:
            response = self.get_response(request)
        if hasattr(self, 'process_response'):
            response = self.process_response(request, response)

        return response

    def process_response(self, request, response):
        # messages = list(response.context['messages'])
        # print(messages)
        # return ReqJSONRenderer(status=200)
        # print(response.data)
        # print(response.data)
        # print(response.status_code)
        # print(response.renderer_contextd)
        # print("------------------")
        path = request.path_info.lstrip('/')
        valid_urls = (url.match(path) for url in self.API_URLS)

        if request.method in self.METHOD and any(valid_urls):
            status = response.status_code
            print(status)
            print(">>>>>>>>>")
            if status == '500.1':
                print("test success")

            response_format = {
                'success': is_success(status),
                'message': None,
                'result': {}
            }

            pass
        return response




# LOGIN_FALL = {
#     'success': is_success(status),
#     'message': None,
#     'result': {}
# }
