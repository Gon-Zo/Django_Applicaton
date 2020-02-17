from django.utils.deprecation import MiddlewareMixin
from django.http import JsonResponse


# Error Middleware
class StackOverflowMiddleware(MiddlewareMixin):
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        # print(response.getvalue.read)
        return JsonResponse({"status": response.status_code, "detail": "Error To Server"}, status=response.status_code)

    def process_exception(self, request, exception):
        from rest_framework import settings
        print("Test...")
        if settings.DEBUG:
            print(exception.__class__.__name__)
            print(exception.message)
        return None
