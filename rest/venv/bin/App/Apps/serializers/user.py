from rest_framework import serializers
from Apps.models.user import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields = ['seq', 'id', 'pwd', 'name', 'birthDate', 'address', 'type', 'is_use', 'create_at', 'test']
        fields = '__all__'


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'pwd']
