from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ReviewSerializer
from App.util.comm import param_parser
from .models import Review
from App.util.RequesetMsg import (RESULT_LIST, REVIEW_SUCCESS, REVIEW_FAIL)


# checking to seq
def check_seq(seq):
    if not seq:
        return Review.objects.all()
    else:
        return review_object(seq)


# review 필터
def review_object(seq):
    return Review.objects.filter(seq=seq)


class ReviewApi(APIView):
    def get(self, request):
        seq = request.GET.get('seq')
        review = check_seq(seq)
        serializer = ReviewSerializer(review, many=True)
        return Response(RESULT_LIST(serializer.data), status=200)

    def post(self, request):
        data = param_parser(request.GET)
        Review.objects.create(**data)
        return Response(REVIEW_SUCCESS, status=200)


class ReviewRestApi(APIView):
    def get(self, request, seq):
        review = review_object(seq)
        serializer = ReviewSerializer(review, many=True)
        return Response(RESULT_LIST(serializer.data), status=200)

    def put(self, request, seq):
        review = review_object(seq)
        data = param_parser(request.GET)
        review.update(**data)
        return Response(REVIEW_SUCCESS, status=200)

    def delete(self, request, seq):
        review = review_object(seq)
        if not review:
            return Response(REVIEW_FAIL, status=500)
        review.delete()
        return Response(REVIEW_SUCCESS, status=200)
