from django.db import models
# from my_app.models import ImageModel, FileModel

# Create your models here.
class User(models.Model):
    class Meta:
        db_table = '"mk_user"'

    # pk
    seq = models.AutoField(primary_key=True)
    # email
    id = models.CharField(max_length=250)
    # password
    pwd = models.CharField(max_length=250)
    # name
    name = models.CharField(max_length=250)
    # 0000-00-00
    birthDate = models.DateField()
    # address
    address = models.TextField()
    # type >> M & U
    type = models.CharField(max_length=2)
    # Image
    img = models.ImageField(blank=True, upload_to="blog/profile_pic", null=True)
    # state
    is_use = models.BooleanField()
    create_at = models.DateTimeField(auto_now_add=True)
