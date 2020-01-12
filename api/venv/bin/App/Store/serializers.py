from rest_framework import serializers
from .models import Store
from User.serializers import UserSerializer

class StoreSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Store
        fields = '__all__'
