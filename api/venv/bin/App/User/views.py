from rest_framework.views import APIView
from django.http import HttpResponse
from .models import User
from .form import UserForm, LoginForm, UserUpdateForm
from .serializers import UserSerializer
from comm.JSONRenderer import JSONParser
import comm.exception


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
        # id = request.GET.get("id")
        # pwd = request.GET.get("pwd")
        # name = request.GET.get("name")
        # address = request.GET.get("address")
        # img = request.GET.get("img")
        # use_yn = request.GET.get("useYn")

        form = UserUpdateForm(data=request.GET)
        seq = form.data['seq']
        user = User.objects.filter(seq=seq)

        # if id is not None:
        #     user.update(id=id)
        # if pwd is not None:
        #     user.update(pwd=pwd)
        # if name is not None:
        #     user.update(id=name)
        # if address is not None:
        #     user.update(id=id)
        # if img is not None:
        #     user.update(id=id)
        # if use_yn is not None:
        #     user.update(id=id)

        return HttpResponse(status=204)

    # 유저 삭제
    def delete(self, request, seq):
        User.objects.filter(seq=seq).delete()
        return HttpResponse(status=204)


class Login(APIView):
    queryset = User.objects.all()

    def post(self, request):
        form = LoginForm(data=request.POST)
        id = form.data['id']
        pwd = form.data['pwd']
        user = User.objects.filter(id=id, pwd=pwd)
        if not user:
            return JSONParser(comm.exception.get_login_fall(), status=500)
        return JSONParser(comm.exception.get_login_success(), status=200)
