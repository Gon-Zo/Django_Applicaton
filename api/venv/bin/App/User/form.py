from django import forms
from .models import User


# Setting to Model Field Value
class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('id', 'pwd', 'name', 'birthDate', 'address', 'type', 'use_yn',)


# Login Form
class LoginForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['id', 'pwd']


# User Update
class UserUpdateForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['id', 'pwd', 'name', 'address', 'use_yn']

    def user_update(self):
        pass
