from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from .models import Category

class CategoryApi(APIView):
    def get(self , request):
        category = Category.objects.all()
        return
