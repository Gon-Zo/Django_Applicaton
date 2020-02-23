from django.db import models
from .user import User

class Store(models.Model):
    class Meta:
        db_table = '"mk_store"'

    # pk
    seq = models.AutoField(primary_key=True)
    # store title
    title = models.CharField(max_length=250)
    # store phone number
    phone = models.CharField(max_length=250)
    # store address
    address = models.TextField()
    # store image
    img = models.ImageField(blank=True, upload_to="blog/profile_pic", null=True)
    # user
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    create_at = models.DateTimeField(auto_now_add=True)
