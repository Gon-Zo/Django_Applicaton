from django.db import models

# Create your models here.
class User(models.Model):

    class Meta:
        db_table = '"mk_user"'

    seq = models.AutoField(primary_key=True)
    # 아이디
    id = models.CharField(max_length=250)
    # 비밀번호
    pwd = models.CharField(max_length=250)
    # 유저 이름
    name = models.CharField(max_length=250)
    # 생년월일
    # todo birthDate change
    birthDate = models.DateField()
    # 집 주소
    address = models.TextField()
    # 유저의 타입
    type = models.CharField(max_length=2)
    # 이미지 명
    # img = models.TextField()
    # 유저 아이디 사용유무
    use_yn = models.BooleanField()
    # 회원 가입 날짜
    regdate = models.DateTimeField(auto_now_add=True)
