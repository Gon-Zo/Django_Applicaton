from django.db import models
from .product import Product
from .user import User

# Create your models here.
class Review(models.Model):
    class Meta:
        db_table = '"mk_review"'

    seq = models.AutoField(primary_key=True)
    title = models.TextField()
    content = models.TextField()
    product = models.ForeignKey(Product, related_name='product_seq', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='user_seq', on_delete=models.CASCADE)
    create_at = models.DateTimeField(auto_now_add=True)
