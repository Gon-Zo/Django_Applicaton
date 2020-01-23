from rest_framework.views import APIView
from .models import Image
from .serializers import ImageSerializer
from rest_framework.response import Response

from django.http import HttpResponse, JsonResponse


class ImageApi(APIView):

    def get(self, request):
        seq = request.GET.get('seq')
        if seq is None:
            return Response(status=500)
        i = Image.objects.filter(seq=seq)
        resized_img = i.get().photo
        return HttpResponse(resized_img, content_type="image/png")

        # print(i)
        # print(i.get().title)
        # print(i.get().photo)
        # url = "App/media/{}".format(i.get().photo)
        # print(url)
        # with open(url, mode="r", encoding="utf-16") as r:
        #     image = r.read()
        # print(image)
        # return HttpResponse()
        # return Response({'message': 'None', 'result': serializer.data}, content_type="image/jpeg", status=200)
        # return HttpResponse({"result": image}, content_type="image/jpeg")

    def post(self, request):
        # get File Data
        fileData = request.FILES
        title = fileData.get('file')
        Image.objects.create(photo=title, title=title, type="I")
        return Response(status=200)
