from django.db import models
from User.models import User
from Item.models import Item


# Create your models here.
class Basket(models.Model):
    class Meta:
        db_table = '"mk_basket"'

    # pk
    seq = models.AutoField(primary_key=True)
    # 아이템 번호
    # item = models.ForeignKey("item.Item", related_name='basket_item', on_delete=models.CASCADE, null=False,editable=True)
    item = models.ForeignKey(Item, related_name='basket_item', on_delete=models.CASCADE, null=False, editable=True)
    # 유저  번호
    user = models.ForeignKey(User, related_name='basket_user', on_delete=models.CASCADE)
    # 등록일
    regdate = models.DateTimeField(auto_now_add=True)
