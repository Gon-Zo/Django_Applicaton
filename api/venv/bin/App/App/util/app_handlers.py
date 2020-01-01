from django.utils.deprecation import MiddlewareMixin
from .load import StartApplication
# from django.core.signals import request_finished, request_started
# from django.dispatch import receiver


class StartAppMiddleware(MiddlewareMixin):
    StartApplication()
    pass


# @receiver(request_started)
# def my_callback_start(sender, environ, **kwargs):
#     print("Request Start! >> ")

#
#
# @receiver(request_finished)
# def my_callback_finish(sender, **kwargs):
#     # print("Request Finished!")
#     pass
