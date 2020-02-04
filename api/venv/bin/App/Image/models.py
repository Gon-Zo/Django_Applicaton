from django.db import models


# Create your models here.
class Image(models.Model):
    class Meta:
        db_table = '"mk_img"'

    # pk
    seq = models.AutoField(primary_key=True)
    # image name
    title = models.CharField(max_length=250)
    # Image File
    photo = models.ImageField(blank=True, upload_to="blog/profile_pic", null=True)
    # Image Type
    # type
    type = models.CharField(max_length=250, null=True)
    # 등록일
    regdate = models.DateTimeField(auto_now_add=True)


class mapping_img(models.Model):
    class Meta:
        db_table = "mk_mapping_img"

    # seq value
    seq = models.AutoField(primary_key=True)
    # seq value
    num = models.IntegerField()
    # 등록일
    regdate = models.DateTimeField(auto_now_add=True)
