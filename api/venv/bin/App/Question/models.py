from django.db import models
from Item.models import Item
from User.models import User


# Create your models here.
class Question(models.Model):
    class Meta:
        db_table = '"mk_question"'

    # pk
    seq = models.AutoField(primary_key=True)
    # 문의 제목
    title = models.TextField()
    # 문의 내용
    content = models.TextField()
    # 비밀글
    lockYn = models.BooleanField()
    # review seq
    review_seq = models.IntegerField()
    # 아이템 번호
    item = models.ForeignKey(Item, related_name='question_item', on_delete=models.CASCADE, null=False)
    # 유저  번호
    user = models.ForeignKey(User, related_name='question_user', on_delete=models.CASCADE, null=False)
    # 등록일
    regdate = models.DateTimeField(auto_now_add=True)
