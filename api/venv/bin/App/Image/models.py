from django.db import models


# Create your models here.
class Image(models.Model):
    class Meta:
        db_table = '"mk_img"'

    seq = models.AutoField(primary_key=True)
    title = models.CharField(max_length=250)
    photo = models.ImageField(blank=True, upload_to="blog/profile_pic", null=True)
    type = models.CharField(max_length=250, null=True)
    num = models.IntegerField()
    create_at = models.DateTimeField(auto_now_add=True)
