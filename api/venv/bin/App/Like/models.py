from django.db import models
from User.models import User
from Item.models import Item
from Store.models import Store


# Create your models here.
class Like(models.Model):
    class Meta:
        db_table = '"mk_like"'

    # pk
    seq = models.AutoField(primary_key=True)
    # 아이템 번호
    item = models.ForeignKey(Item, related_name='item', on_delete=models.CASCADE, null=False, editable=True)
    # 유저  번호
    user = models.ForeignKey(User, related_name='user', on_delete=models.CASCADE)
    # 가게 번호
    store = models.ForeignKey(Store, related_name='store', on_delete=models.CASCADE, null=False, editable=True)
    # 등록일
    regdate = models.DateTimeField(auto_now_add=True)
