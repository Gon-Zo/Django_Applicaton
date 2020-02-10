from django.db import models
from Product.models import Product
from User.models import User


class Question(models.Model):
    class Meta:
        db_table = '"mk_question"'

    seq = models.AutoField(primary_key=True)
    title = models.TextField()
    content = models.TextField()
    lockYn = models.BooleanField()
    product = models.ForeignKey(Product, related_name='question_product', on_delete=models.CASCADE, null=False)
    user = models.ForeignKey(User, related_name='question_user', on_delete=models.CASCADE, null=False)
    create_at = models.DateTimeField(auto_now_add=True)


class ReQuestion(models.Model):
    class Meta:
        db_table = "mk_re_question"

    seq = models.AutoField(primary_key=True)
    content = models.TextField()
    question = models.ForeignKey(Question, related_name='question_sea', on_delete=models.CASCADE, null=False)
    re_num = models.IntegerField()
    create_at = models.DateTimeField(auto_now_add=True)
