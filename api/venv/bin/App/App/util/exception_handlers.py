from rest_framework.views import exception_handler
from django.http import Http404


def get_exception_handler(exc, content):
    print("Handle TEST ...")
    response = exception_handler(exc, content);
    temp = None
    status = response.status_code
    if isinstance(exc, Http404):
        response['status_code'] = status
        temp = {"status": response.status_code, "detail": "NotFound"}
        response.data = temp

    if response is not None:
        response['status_code'] = status
        temp = {"status": response.status_code, "detail": response.data['detail']}
        response.data = temp

    return response
