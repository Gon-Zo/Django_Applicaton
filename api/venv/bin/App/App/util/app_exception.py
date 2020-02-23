from rest_framework.exceptions import APIException
from rest_framework.status import HTTP_500_INTERNAL_SERVER_ERROR


class AppException(APIException):
    # status_code = HTTP_500_INTERNAL_SERVER_ERROR
    # default_detail = "Test"

    def __call__(self, *args, **kwargs):
        print("AppException 여기")

    def function(request):
        raise AppException('msg here')
