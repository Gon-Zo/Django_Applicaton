from rest_framework.views import exception_handler


# exception_handler
def get_exception_handler(exc, content):
    response = exception_handler(exc, content);

    if response is not None:
        response['status_code'] = response.status_code
        response.data = {"status": response.status_code, "detail": response.data['detail']}

    return response
