from django.db import models
from Item.models import Item
from User.models import User


# Create your models here.
class Review(models.Model):
    class Meta:
        db_table = '"mk_review"'

    seq = models.AutoField(primary_key=True)
    # 리뷰 제목
    title = models.TextField()
    # 리뷰 내용
    content = models.TextField()
    # 평가
    avg = models.IntegerField()
    # review seq
    review_seq = models.IntegerField()
    # 아이템 번호
    item = models.ForeignKey(Item, related_name='review_item', on_delete=models.CASCADE)
    # 유저  번호
    user = models.ForeignKey(User, related_name='review_user', on_delete=models.CASCADE)
    # 등록일
    regdate = models.DateTimeField(auto_now_add=True)
