from rest_framework import serializers
from Apps.models.store import Store
from .user import UserSerializer

class StoreSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Store
        fields = '__all__'
