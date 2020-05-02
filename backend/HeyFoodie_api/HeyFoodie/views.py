from django.shortcuts import render
from rest_framework import generics
from .models import Category, Ingredient_Category, Ingredient, Menu
from .serializers import MenuSerializer, CategorySerializer, IngredientCategorySerializer, IngredientSerializer

# Create your views here.

class ListCategory(generics.ListCreateAPIView) :
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class DetailCategory(generics.RetrieveUpdateDestroyAPIView) :
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ListIngredientCategory(generics.ListCreateAPIView):
    queryset = Ingredient_Category.objects.all()
    serializer_class = IngredientCategorySerializer

class DetailIngredientCategory(generics.RetrieveUpdateDestroyAPIView) :
    queryset = Ingredient_Category.objects.all()
    serializer_class = IngredientCategorySerializer

class ListIngredient(generics.ListCreateAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

class DetailIngredient(generics.RetrieveUpdateDestroyAPIView) :
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

class ListMenu(generics.ListCreateAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

class DetailMenu(generics.RetrieveUpdateDestroyAPIView) :
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer