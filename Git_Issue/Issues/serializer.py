from rest_framework import serializers
from .models import Categories,Items


class CategoriesSerializers(serializers.ModelSerializer):
    

    class Meta:
        model = Categories
        fields = ('id','name',)



        
class ItemsSerializers(serializers.ModelSerializer):
    type_of = CategoriesSerializers()
    

    class Meta:
        model = Items
        fields = ('id','type_of','description',)


class ItemCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Items
        fields = ('type_of', 'description')