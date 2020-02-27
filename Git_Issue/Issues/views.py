from django.shortcuts import render

from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from .serializer import *

from django.shortcuts import get_object_or_404


class CategoriesViewSet(viewsets.ViewSet):
    """
    Example empty viewset demonstrating the standard
    actions that will be handled by a router class.
    If you're using format suffixes, make sure to also include
    the `format=None` keyword argument for each action.
    """

    def list(self, request):
        queryset = Categories.objects.all()
        serializer = CategoriesSerializers(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = CategoriesSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


    def retrieve(self, request, pk=None):
        queryset = Categories.objects.all()
        option = get_object_or_404(queryset, pk=pk)
        serializer = CategoriesSerializers(option)
        return Response(serializer.data)

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass
    
class ItemsViewSet(viewsets.ViewSet):
    
    def list(self, request):
        queryset = Items.objects.all()
        serializer = ItemsSerializers(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = ItemsSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


    def retrieve(self, request, pk=None):
        queryset = Items.objects.all()
        option = get_object_or_404(queryset, pk=pk)
        serializer = ItemsSerializers(option)
        return Response(serializer.data)


