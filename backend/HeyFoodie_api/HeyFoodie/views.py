from django.shortcuts import render
from rest_framework import generics
from .models import Category
from .serializers import MenuSerializer

# Create your views here.

class ListCategory(generics.ListCreateAPIView) :
    queryset = Category.objects.all()
    serializer_class = MenuSerializer


class DetailCategory(generics.RetrieveUpdateDestroyAPIView) :
    queryset = Category.objects.all()
    serializer_class = MenuSerializer
