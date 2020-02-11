from rest_framework import serializers
from .models import User
from App.util.comm import image_as_base64


class UserTemp:
    def __init__(self, seq, id, pwd, name, birthDate, address, type, img, is_use, create_at):
        self.seq = seq
        self.id = id
        self.pwd = pwd
        self.name = name
        self.birthDate = birthDate
        self.address = address
        self.type = type
        self.img = img
        self.is_use = is_use
        self.create_at = create_at


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def to_representation(self, obj):
        # src = "App/media" + str(obj.img)
        # t = image_as_base64(src)
        data = super().to_representation(obj)
        return data


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'pwd']
