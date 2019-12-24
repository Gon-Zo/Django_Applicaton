from django.db import models
from Store.models import Store


# Create your models here.
class Item(models.Model):
    class Meta:
        db_table = '"mk_item"'

    seq = models.AutoField(primary_key=True)
    # 아이템 명
    title = models.CharField(max_length=250)
    # 아이템 갯수
    count = models.IntegerField()
    # 아이템 가격
    price = models.IntegerField()
    # 아이템 정보
    info = models.TextField()
    # 아이템 상태 품절 true / 반대 false
    state = models.BooleanField()
    # 가게 번호
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    # 등록일
    regdate = models.DateTimeField(auto_now_add=True)
