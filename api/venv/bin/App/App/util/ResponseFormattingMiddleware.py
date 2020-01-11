# Request & Response Middleware

import re
from rest_framework.status import is_client_error, is_success
from App.util.comm import ReqJSONRenderer
from App.util.auth import __token_auth__


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

        if request.method in self.METHOD and any(valid_urls):
            if __url_check__(request.path_info):
                auth = request.META.get('HTTP_AUTHORIZATION')
                if auth is None:
                    return __render_response__(500, False, "[Mka Error] 500 ", "NONE AUTHORIZATION ERROR")
                elif not __token_auth__(auth):
                    return __render_response__(500, False, "[Mka Error] 500 ", "NOT JWT ERROR")
                else:
                    return __result_response__(request, response)
            else:
                return __result_response__(request, response)


# ERROR message
def getMkaErrorMessage(status):
    if status == 404:
        return "Not Found"
    elif status == 500:
        return "Internal Server Error"
    else:
        return "Null"


# login url checking
def __url_check__(url):
    return not str(url).__contains__('login')


# json format
def __render_format__(status_yn, message, result):
    response_format = {
        'success': status_yn,
        'message': message,
        'result': result
    }
    return response_format


# render to json
def __render_response__(status, status_yn, message, result):
    return ReqJSONRenderer(__render_format__(status_yn, message, result), status=status)


# render to json
def __json_response__(format, status):
    return ReqJSONRenderer(format, status=status)


# success to auth and result to json response
def __result_response__(request, response):
    status = response.status_code
    status_yn = is_success(response.status_code)
    str_format = None
    if hasattr(response, 'data') and \
            getattr(response, 'data') is not None:
        data = response.data
        if is_success(response.status_code):
            try:
                result_val = data.pop('result')
            except KeyError as k:
                result_val = None
            str_format = __render_format__(status_yn, data.pop('message'), result_val)
        else:
            str_format = __render_format__(status_yn, "[Mka Error] " + str(status), data.get('detail'))
    else:
        str_format = __render_format__(status_yn, "[Mka Error] " + str(status), getMkaErrorMessage(status))
        return __json_response__(str_format, status=status)

    response.data = str_format
    response.content = response.render().rendered_content
    return __json_response__(response.data, status)
