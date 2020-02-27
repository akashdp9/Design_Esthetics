from django.contrib import admin
from django.urls import path
from Issues.views import CategoriesViewSet, ItemsViewSet
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path('admin/', admin.site.urls),
]
router = DefaultRouter()
router.register(r'categories', CategoriesViewSet, basename ='categories'),
router.register(r'items',ItemsViewSet,basename='items')
urlpatterns += router.urls