from rest_framework import serializers
from Apps.models.product import Product
from .store import StoreSerializer

class ProductSerializer(serializers.ModelSerializer):
    store = StoreSerializer(read_only=True)

    class Meta:
        model = Product
        fields = '__all__'
