from django.db import models
from .user import User

# Create your models here.
class Like(models.Model):
    class Meta:
        db_table = '"mk_like"'

    seq = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, related_name='user', on_delete=models.CASCADE)
    # content seq
    num = models.IntegerField()
    # content type
    type = models.CharField(max_length=250, null=True)
    create_at = models.DateTimeField(auto_now_add=True)
