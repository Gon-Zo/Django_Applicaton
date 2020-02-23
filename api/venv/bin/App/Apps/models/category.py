from django.db import models
from .product import Product

class Category(models.Model):
    class Meta:
        db_table = '"mk_category"'

    seq = models.AutoField(primary_key=True)
    title = models.CharField(max_length=250)
    order = models.IntegerField(null=True)
    create_at = models.DateTimeField(auto_now_add=True)


class ProductCategory(models.Model):
    class Meta:
        db_table = '"mk_product_category"'

    seq = models.AutoField(primary_key=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    create_at = models.DateTimeField(auto_now_add=True)
