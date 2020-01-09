import re
from rest_framework.status import is_client_error, is_success
from App.util.comm import ReqJSONRenderer
from App.util.auth import __token_auth__


# todo : Login Error checking to week

class ResponseFormattingMiddleware:
    """
    Rest Framework 을 위한 전용 커스텀 미들웨어에 대해 response format 을 자동으로 세팅
    """
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
        """
        API_URLS 와 method 가 확인이 되면
        response 로 들어온 data 형식에 맞추어
        response_format 에 넣어준 후 response 반환
        """
        path = request.path_info.lstrip('/')
        valid_urls = (url.match(path) for url in self.API_URLS)

        if request.method in self.METHOD and any(valid_urls):

            status = response.status_code
            status_yn = is_success(status)

            if hasattr(response, 'data') and \
                    getattr(response, 'data') is not None:
                data = response.data
                a = None
                if status_yn:
                    a = __render_format__(status_yn, data.pop('message'), data.pop('result'))
                else:
                    a = __render_format__(status_yn, "[Mka Error] " + str(status), data.get('detail'))

            response.data = a
            response.content = response.render().rendered_content
            return ReqJSONRenderer(response.data, status=response.status_code)

# if __url_check__(request.path_info):
#     auth = request.META.get('HTTP_AUTHORIZATION')
#     if auth is None:
#         print("여기 !!")
#         return __render_response__(500, False, "[Mka Error] 500 ", "NONE AUTHORIZATION ERROR")
#     elif not __token_auth__(auth):
#         print("여기 ?")
#         return __render_response__(500, False, "[Mka Error] 500 ", "NOT JWT ERROR")
#     else:
#         print("여기는 토긐크크크")
#         return self.__test__(self, request, response)
# else:
#     print("여기는 로그인")
#     self.__test__(self, request, response)


def getMkaErrorMessage(status):
    print(str(status))
    if status == 404:
        return "Not Found"
    elif status == 500:
        return "Internal Server Error"
    else:
        return "Null"


def __url_check__(url):
    return not str(url).__contains__('login')


def __render_format__(status_yn, message, result):
    response_format = {
        'success': status_yn,
        'message': message,
        'result': result
    }
    return response_format


def __render_response__(status, status_yn, message, result):
    return ReqJSONRenderer(__render_format__(status_yn, message, result), status=status)
