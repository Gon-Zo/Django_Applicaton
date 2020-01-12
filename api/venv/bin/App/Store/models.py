from django.db import models
from User.models import User

# # Create your models here.
class Store(models.Model):
    class Meta:
        db_table = '"mk_store"'

    seq = models.AutoField(primary_key=True)
    # 가게 이름
    title = models.CharField(max_length=250)
    # 전화 번호
    phone = models.CharField(max_length=250)
    # 가게 주소
    address = models.TextField()
    # 가게 이미지 명
    # img = models.TextField()
    # 저장 날짜
    regdate = models.DateTimeField(auto_now_add=True)
    # 유저 매핑
    user = models.OneToOneField(User, on_delete=models.CASCADE)
