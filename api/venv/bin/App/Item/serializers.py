from rest_framework import serializers
from .models import Item
from Store.serializers import StoreSerializer


class ItemSerializer(serializers.ModelSerializer):
    store = StoreSerializer(read_only=True)

    class Meta:
        model = Item
        fields = '__all__'
