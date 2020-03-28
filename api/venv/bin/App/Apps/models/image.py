from django.db import models


class Image(models.Model):
    class Meta:
        db_table = '"mk_img"'

    seq = models.AutoField(primary_key=True)
    photo = models.TextField()
    seq_fk = models.IntegerField()
    type = models.TextField()
    create_at = models.DateTimeField(auto_now_add=True)
