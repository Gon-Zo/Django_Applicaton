from rest_framework import serializers
from Apps.models.user import User

# class UserTemp:
#     def __init__(self, seq, id, pwd, name, birthDate, address, type, img, is_use, create_at):
#         self.seq = seq
#         self.id = id
#         self.pwd = pwd
#         self.name = name
#         self.birthDate = birthDate
#         self.address = address
#         self.type = type
#         self.img = img
#         self.is_use = is_use
#         self.create_at = create_at


class UserSerializer(serializers.ModelSerializer):
    # test = serializers.ReadOnlyField()

    class Meta:
        model = User
        # fields = ['seq', 'id', 'pwd', 'name', 'birthDate', 'address', 'type', 'is_use', 'create_at', 'test']
        fields = '__all__'

    # def create(self, validated_data):
    #     print(validated_data)
    #     print(">>>>>>>>>>>>>.")
    #     # now the key 'my_custom_field' is available in validated_data
    #     # ...
    #     # id = validated_data['id']
    #     # print(id)
    #     # print(">>>>>>>>>")
    #     return validated_data

    # def update(self, instance, validated_data):
    #
    #     user = instance.user
    #     print(user)
    #     # pprint(vars(user))
    #     # print(validated_data)
    #     # for updated_field in validated_data['user']:
    #     #     value = validated_data['user'][updated_field]
    #     #     setattr(user, updated_field, value)
    #     #
    #     # for updated_field in validated_data:
    #     #     if updated_field == 'user':
    #     #         for user_field in validated_data['user']:
    #     #             value = validated_data['user'][user_field]
    #     #             setattr(user, user_field, value)
    #     #     else:
    #     #         value = validated_data[updated_field]
    #     #         setattr(instance, updated_field, value)
    #     #
    #     # user.save()
    #     # instance.save()
    #     return instance

    # def to_representation(self, obj):
    #     # print(obj.img)
    #     # src = "App/media" + str(obj.img)
    #     # t = image_as_base64(src)
    #     data = super().to_representation(obj)
    #     return data

    # def to_internal_value(self, data):
    #     print(data)
    #     # This function is for the direction: Dict -> Instance
    #     # Here you can manipulate the data if you need to.
    #     return data


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'pwd']
from rest_framework import serializers
from Apps.models.user import User

# class UserTemp:
#     def __init__(self, seq, id, pwd, name, birthDate, address, type, img, is_use, create_at):
#         self.seq = seq
#         self.id = id
#         self.pwd = pwd
#         self.name = name
#         self.birthDate = birthDate
#         self.address = address
#         self.type = type
#         self.img = img
#         self.is_use = is_use
#         self.create_at = create_at


class UserSerializer(serializers.ModelSerializer):
    # test = serializers.ReadOnlyField()

    class Meta:
        model = User
        # fields = ['seq', 'id', 'pwd', 'name', 'birthDate', 'address', 'type', 'is_use', 'create_at', 'test']
        fields = '__all__'

    # def create(self, validated_data):
    #     print(validated_data)
    #     print(">>>>>>>>>>>>>.")
    #     # now the key 'my_custom_field' is available in validated_data
    #     # ...
    #     # id = validated_data['id']
    #     # print(id)
    #     # print(">>>>>>>>>")
    #     return validated_data

    # def update(self, instance, validated_data):
    #
    #     user = instance.user
    #     print(user)
    #     # pprint(vars(user))
    #     # print(validated_data)
    #     # for updated_field in validated_data['user']:
    #     #     value = validated_data['user'][updated_field]
    #     #     setattr(user, updated_field, value)
    #     #
    #     # for updated_field in validated_data:
    #     #     if updated_field == 'user':
    #     #         for user_field in validated_data['user']:
    #     #             value = validated_data['user'][user_field]
    #     #             setattr(user, user_field, value)
    #     #     else:
    #     #         value = validated_data[updated_field]
    #     #         setattr(instance, updated_field, value)
    #     #
    #     # user.save()
    #     # instance.save()
    #     return instance

    # def to_representation(self, obj):
    #     # print(obj.img)
    #     # src = "App/media" + str(obj.img)
    #     # t = image_as_base64(src)
    #     data = super().to_representation(obj)
    #     return data

    # def to_internal_value(self, data):
    #     print(data)
    #     # This function is for the direction: Dict -> Instance
    #     # Here you can manipulate the data if you need to.
    #     return data


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'pwd']
