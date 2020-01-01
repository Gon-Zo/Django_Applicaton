from rest_framework.views import exception_handler
from App.util.comm import ReqJSONRenderer


def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)

    if response is not None:
        status = response.status_code
        # data = response.data
        response.data = {}
        # errors = []
        # for field, value in data.items():
        #     errors.append("{} : {}".format(field, " ".join(value)))
        temp = {"status": False, "exception": str(exc)}
        return ReqJSONRenderer(temp, status=status)

    return None
