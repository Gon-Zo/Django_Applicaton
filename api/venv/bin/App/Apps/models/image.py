from django.db import models
from .review import Review
from .product import Product
from .question import Question


class QuestionImage(models.Model):
    class Meta:
        db_table = '"mk_img_question"'

    seq = models.AutoField(primary_key=True)
    photo = models.ImageField(blank=True, upload_to="blog/profile_pic", null=True)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    create_at = models.DateTimeField(auto_now_add=True)


class ProductImage(models.Model):
    class Meta:
        db_table = '"mk_img_product"'

    seq = models.AutoField(primary_key=True)
    photo = models.ImageField(blank=True, upload_to="blog/profile_pic", null=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    create_at = models.DateTimeField(auto_now_add=True)


class ReviewImage(models.Model):
    class Meta:
        db_table = '"mk_img_review"'

    seq = models.AutoField(primary_key=True)
    photo = models.ImageField(blank=True, upload_to="blog/profile_pic", null=True)
    review = models.ForeignKey(Review, on_delete=models.CASCADE)
    create_at = models.DateTimeField(auto_now_add=True)
