from django.utils.deprecation import MiddlewareMixin
from .load import StartApplication


class StartAppMiddleware(MiddlewareMixin):
    StartApplication()
    pass


