from rest_framework.views import exception_handler
from App.util.comm import ReqJSONRenderer


# from django.http import HttpResponse
# from django.template import loader, RequestContext, Context
# from apps.settings import DEBUG
# from libs.requestprovider.middleware import get_current_request


def get_exception_handler(exc, content):
    response = exception_handler(exc, content);

    print(response.status_code)

    if response is not None:
        response['status_code'] = response.status_code
        response.data = {"status": response.status_code, "detail": response.data['detail']}

        # if not DEBUG:
        # errors can be more generic
    # if response.data['status_code'] == 500:
    #     print("404")
        # t = loader.get_template('404.html')
        # c = RequestContext(get_current_request(), {})
        # return HttpResponse(t.render(c), content_type="text/html")

    return response
