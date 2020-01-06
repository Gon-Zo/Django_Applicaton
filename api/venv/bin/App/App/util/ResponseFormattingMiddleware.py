import re
from rest_framework.status import is_client_error, is_success
from App.util.comm import ReqJSONRenderer

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
            response_format = {
                'success': is_success(status),
                'message': None,
                'result': {}
            }

            if hasattr(response, 'data') and \
                    getattr(response, 'data') is not None:
                data = response.data
                try:
                    response_format['message'] = data.pop('message')
                    print(">TESTT>")
                except (KeyError, TypeError):
                    response_format['message'] = "[Mka Error] " + str(status)
                    response_format['result'] = data.get('detail')
                finally:
                    if not is_client_error(status):
                        response_format['result'] = data.get('result')
                        # response_format['result'] = None
                        # response_format['message'] = data
                    # else:
                    #     response_format['message'] = "[Mka Error] " + str(status)
                    #     response_format['result'] = data.get('detail')
                    response.data = response_format
                    response.content = response.render().rendered_content
            else:
                print(response)
                print("TESTESTESTSET")
                print(">>>>>>>>>>>>>>>>>>")
                response_format['message'] = "[Mka Error] " + str(status)
                response_format['result'] = getMkaErrorMessage(status)

                response.data = response_format

        return ReqJSONRenderer(response.data, status=response.status_code)


def getMkaErrorMessage(status):
    print(str(status))
    if status == 404:
        return "Not Found"
    elif status == 500:
        return "Internal Server Error"
    else:
        return "Null"
