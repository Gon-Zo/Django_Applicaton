from django.http import HttpResponse
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from App.util.ResponseMsg import (EXCEPTION_DETAIL)


#  JSON 랜더링 함수
class ReqJSONRenderer(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(ReqJSONRenderer, self).__init__(content, **kwargs)


# 랜더링 객체
class Result:
    def __init__(self, status, result, data):
        self.status = status
        self.result = result
        self.data = data

    def __render_response__(self):
        return ReqJSONRenderer({"status": self.status, "result": self.result, "data": self.data}, status=self.status)


# 파라미터 랜더링
def param_parser(data):
    temp = {}
    try:
        for key in data:
            value = data[key]
            temp.setdefault(key, value)
    except Exception as e:
        return Response(EXCEPTION_DETAIL(e), status=500)

    return temp


def page_parser(page):
    count = page.count()
    num_page = page.num_pages()
    # page_range = page.page_range()
    # get_page = page.get_page()
    # has_next = page.has_next()
    # has_previous = page.has_previous()
    # previous_page_number = page.previous_page_number()
    return {
        "count": count,
        "numPage": num_page,
        # page_range: page_range,
        # get_page: get_page,
        # has_next: has_next,
        # has_previous: has_previous,
        # previous_page_number: previous_page_number,
    }
