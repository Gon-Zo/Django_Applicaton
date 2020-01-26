from rest_framework.views import APIView
from .models import Image
from rest_framework.response import Response

from django.http import HttpResponse


# todo : 이미지 타입 하드코딩 지우기
class ImageApi(APIView):

    def get(self, request):
        seq = request.GET.get('seq')
        if seq is None:
            return Response(status=500)
        i = Image.objects.filter(seq=seq)
        resized_img = i.get().photo
        return HttpResponse(resized_img, content_type="image/png")

    def post(self, request):
        # get File Data
        fileData = request.FILES
        title = fileData.get('file')
        Image.objects.create(photo=title, title=title, type="I")
        return Response(status=200)


class ImageRestApi(APIView):
    def get(self, request, seq):
        i = Image.objects.filter(seq=seq)
        resized_img = i.get().photo
        return HttpResponse(resized_img, content_type="image/png")

    def put(self, request, seq):
        i = Image.objects.filter(seq=seq)
        fileData = request.FILES
        file = fileData.get('file')
        i.update(title=file, photo=file, type='I')
