from django.contrib import admin
from .models import Category, Ingredient_Category, Ingredient, Menu, Store, Openday, Customer, Image
from django.utils.safestring import mark_safe

admin.site.register(Category)
admin.site.register(Ingredient_Category)
admin.site.register(Ingredient)
admin.site.register(Menu)
admin.site.register(Store)
admin.site.register(Openday)
admin.site.register(Customer)

class ImageAdmin(admin.ModelAdmin):
    list_display = ['image_tag',] 
    fields = ('image','image_detail',)
    readonly_fields = ('image_tag',)
    list_display = ('image_detail','image_tag')

    def image_tag(self,obj):
        return mark_safe('<img src="{url}" width="250" height="150"/>'.format(
            url = obj.image.url))
    image_tag.allow_tags = True
    image_tag.short_description = 'Image'

admin.site.register(Image,ImageAdmin)