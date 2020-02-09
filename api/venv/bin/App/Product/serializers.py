from rest_framework import serializers
from .models import Product
from Store.serializers import StoreSerializer


class ProductSerializer(serializers.ModelSerializer):
    store = StoreSerializer(read_only=True)

    class Meta:
        model = Product
        fields = '__all__'
