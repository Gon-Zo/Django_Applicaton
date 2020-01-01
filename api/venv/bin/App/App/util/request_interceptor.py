def StatisticsMiddleware(get_response):
    def middleware(request):
        # Code to be executed for each request/response after
        # the view is called.
        print("TEST SUCCESS")
        pass
        # return response  # response should be defined before

    return middleware
