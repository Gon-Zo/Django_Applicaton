from rest_framework.views import exception_handler
from django.http import Http404
from rest_framework.exceptions import APIException


def get_exception_handler(exc, content):
    response = exception_handler(exc, content);
    temp = None
    status = response.status_code

    if response is not None:
        response['status_code'] = status
        temp = {"status": response.status_code, "detail": response.data['detail']}
        response.data = temp

    return response
