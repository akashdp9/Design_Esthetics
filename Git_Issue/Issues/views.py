from django.shortcuts import render

from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from .serializer import *
from rest_framework.generics import ListAPIView, CreateAPIView

from django.shortcuts import get_object_or_404




class CategoriesListAPIView(ListAPIView):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializers

class ItemsListAPIView(ListAPIView):
    queryset = Items.objects.all()
    serializer_class = ItemsSerializers

class ItemCreateAPIview(CreateAPIView):
    queryset = Items.objects.all()
    serializer_class = ItemCreateSerializer
        