from rest_framework.exceptions import APIException
from rest_framework.status import HTTP_500_INTERNAL_SERVER_ERROR


class AppException(APIException):

    def __init__(self, msg):
        status = HTTP_500_INTERNAL_SERVER_ERROR
        fomatError = {"status": status, "detail": msg}
        super().__init__(fomatError)
