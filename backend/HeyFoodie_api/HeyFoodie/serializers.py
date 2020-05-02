from rest_framework import serializers
from .models import Category, Ingredient_Category, Ingredient, Menu

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('category_id', 'category_name')

class IngredientCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient_Category
        fields = ('ingredient_category_id', 'name')

class IngredientSerializer(serializers.ModelSerializer):
    Ingredient_category = IngredientCategorySerializer()
    class Meta:
        model = Ingredient
        fields = ('ingredient_id','ingredient_name','Ingredient_category','price','image')

class MenuSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    ingredient = IngredientSerializer(many=True)

    # def getIngredient(self, ingredient):
    #     return list(ingredient.ingredient_name.values_list('desc', flat=True)) 

    class Meta:
        model = Menu
        fields = ('menu_id', 'name','category','ingredient','price','image')

