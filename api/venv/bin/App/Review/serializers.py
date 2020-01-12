from rest_framework import serializers
from .models import Review
from User.serializers import UserSerializer
from Store.serializers import StoreSerializer
from Item.serializers import ItemSerializer


class ReviewSerializer(serializers.ModelSerializer):
    item = ItemSerializer(read_only=True)
    store = StoreSerializer(read_only=True)
    user = UserSerializer(read_only=True)

    class Meta:
        model = Review
        fields = '__all__'
