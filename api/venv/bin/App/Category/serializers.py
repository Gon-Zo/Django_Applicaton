from rest_framework import serializers
from .models import Category
from .models import item_category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


