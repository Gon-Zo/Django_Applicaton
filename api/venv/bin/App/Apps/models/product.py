from django.db import models
from Store.models import Store


# Create your models here.
class Product(models.Model):
    class Meta:
        db_table = '"mk_product"'

    # pk
    seq = models.AutoField(primary_key=True)
    # product title
    title = models.CharField(max_length=250)
    # product number
    count = models.IntegerField()

    price = models.IntegerField()

    info = models.TextField()
    # sold yn
    is_sold = models.BooleanField()
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    create_at = models.DateTimeField(auto_now_add=True)
