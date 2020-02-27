from django.contrib import admin
from .models import Categories,Items


class CategoriesAdmin(admin.ModelAdmin):
    list_display = ['name',]


admin.site.register(Categories, CategoriesAdmin)

class ItemsAdmin(admin.ModelAdmin):
    list_display = ['type_of','description',]


admin.site.register(Items, ItemsAdmin)