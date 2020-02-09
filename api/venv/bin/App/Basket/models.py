from django.db import models
from User.models import User
from Product.models import Product


# Create your models here.
class Basket(models.Model):
    class Meta:
        db_table = '"mk_basket"'

    seq = models.AutoField(primary_key=True)
    product = models.ForeignKey(Product, related_name='basket_item', on_delete=models.CASCADE, null=False, editable=True)
    user = models.ForeignKey(User, related_name='basket_user', on_delete=models.CASCADE)
    creat_at = models.DateTimeField(auto_now_add=True)

  
