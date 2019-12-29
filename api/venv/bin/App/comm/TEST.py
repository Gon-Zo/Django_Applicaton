from rest_framework.views import exception_handler


def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)
    # print("TEST ... CUSTOM_EXCEPTION_HANDLER >>>>> " + response.status_code)
    if response is not None:
        response.data['status_code'] = response.status_code
