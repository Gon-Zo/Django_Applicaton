from django.core.paginator import Paginator


# Paginator object
def get_paginator(obj, pageNum):
    return Paginator(obj, pageNum)


def get_page_obj(obj, pageNum, page):
    return get_page_obj(obj, pageNum).page(page)


def get_page_cnt(obj, pageNum):
    return get_page_obj(obj, pageNum).count


def get_page_num_page(obj, pageNum):
    return get_page_obj(obj, pageNum).num_pages


class AppPage:

    def __init__(self, obj, pageNum):
        self.page = get_page_obj(obj, pageNum)
    # def _get
