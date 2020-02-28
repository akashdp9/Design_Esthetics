from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter
from Issues.views import ItemsListAPIView, ItemCreateAPIview, CategoriesListAPIView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('categories/', CategoriesListAPIView.as_view(), name ='categories'),
    path('items/list/',ItemsListAPIView.as_view(),name='items'),
    path('items/create/',ItemCreateAPIview.as_view(),name='items_create'),
    
]
