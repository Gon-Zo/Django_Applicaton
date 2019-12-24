from rest_framework.views import APIView
from django.http import HttpResponse
from .models import User
from .form import UserForm
from .serializers import UserSerializer
from comm.JSONRenderer import JSONParser


class UserApi(APIView):

    def get(self, request):
        # 유저 리스트 출력
        user = User.objects.all()
        serializer = UserSerializer(user, many=True)
        return JSONParser(serializer.data)

    #  회원 가입
    def post(self, request):
        form = UserForm(data=request.GET)
        if form.is_valid():
            form.save()
            # return HttpResponse('{"result":"True"}', status=200)
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=403)

    def delete(self, request, seq):
        User.objects.filter(seq=seq).delete()
        return HttpResponse(status=204)


class UserApi2(APIView):

    # 유저 디테일
    def get(self, request, seq):
        user = User.objects.filter(seq=seq)
        serializer = UserSerializer(user, many=True)
        # return JSONResponse(serializer.data)
        pass

    # 유저 정보 수정
    def put(self, request, seq):

        id = request.GET.get("id")
        pwd = request.GET.get("pwd")
        name = request.GET.get("name")
        address = request.GET.get("address")
        # img = request.GET.get("img")
        use_yn = request.GET.get("useYn")

        user = User.objects.filter(seq=seq)

        if id is not None:
            user.update(id=id)
        if pwd is not None:
            user.update(pwd=pwd)
        if name is not None:
            user.update(id=name)
        if address is not None:
            user.update(id=id)
        # if img is not None:
        #     user.update(id=id)
        if use_yn is not None:
            user.update(id=id)

        return HttpResponse(status=204)

    # 유저 삭제
    def delete(self, request, seq):
        User.objects.filter(seq=seq).delete()
        return HttpResponse(status=204)


class Login(APIView):
    queryset = User.objects.all()

    def get(self, request):
        pass

    def post(self, request):
        id = request.GET['id']
        pwd = request.GET['pwd']
        user = User.objects.filter(id=id, pwd=pwd)
        n = len(user)
        if (n != 0):
            # print("suuess")
            return HttpResponse(status=200)
        else:
            # print("false")
            return HttpResponse(status=400)
