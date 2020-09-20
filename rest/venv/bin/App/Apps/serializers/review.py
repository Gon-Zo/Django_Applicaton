from rest_framework import serializers
from Apps.models.review import Review
from .user import UserSerializer
from .store import StoreSerializer
from .product import ProductSerializer

class ReviewSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    store = StoreSerializer(read_only=True)
    user = UserSerializer(read_only=True)

    class Meta:
        model = Review
        fields = '__all__'
