from django.db import models
from Item.models import Item


# Create your models here.
class Category(models.Model):
    class Meta:
        db_table = '"mk_category"'

    # pk
    seq = models.AutoField(primary_key=True)
    # 카테고리 명
    title = models.CharField(max_length=250)
    # 순서
    order = models.IntegerField(null=True)
    # 등록일
    regdate = models.DateTimeField(auto_now_add=True)


class ItemCategory(models.Model):
    class Meta:
        db_table = '"mk_item_category"'

    # pk
    seq = models.AutoField(primary_key=True)
    # category seq
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    # item seq
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
