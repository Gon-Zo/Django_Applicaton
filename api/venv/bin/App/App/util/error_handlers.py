# error_handlers.py
from django.contrib import messages
from django.utils.deprecation import MiddlewareMixin
from .exceptions import BusinessLogicException
from .responses import RedirectToRefererResponse
# from App.util.comm import ReqJSONRenderer


# Mixin for compatibility with Django <1.10
class HandleBusinessExceptionMiddleware(MiddlewareMixin):
    def process_exception(self, request, exception):
        if isinstance(exception, BusinessLogicException):
            # message = "Invalid operation %s" % unicode(exception)
            message = "Invalid operation TEST SUCCESS >> " + str(exception)
            messages.error(request, message)
            print("HEEEEEEEEEEEEEEEEEEE")
            return RedirectToRefererResponse(request)
            # return ReqJSONRenderer({"test": message})
