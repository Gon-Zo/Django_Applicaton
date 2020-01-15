from django import forms
from .models import Basket
from User.serializers import UserSerializer
from Item.serializers import ItemSerializer


class BasketForm(forms.ModelForm):
    user = UserSerializer(read_only=True)
    item = ItemSerializer(read_only=True)

    class Meta:
        model = Basket
        fields = '__all__'
