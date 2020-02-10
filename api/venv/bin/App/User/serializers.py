from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def get_the_field_value(self, obj):
        print(obj.img)
        pass
    # return "{0} ({1}) {2}".format(obj.name, obj.other_name, randint(1, 5))


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'pwd']
