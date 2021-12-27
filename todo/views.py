from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.generics import ListAPIView, DestroyAPIView, UpdateAPIView
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .serializers import ToDoSerializer
from .serializers import ProjectSerializer
from .models import Project, ToDo
from rest_framework.pagination import PageNumberPagination
from django_filters import rest_framework as filters
from rest_framework.permissions import IsAuthenticatedOrReadOnly

# class ProjectPagination(PageNumberPagination):
#     page_size = 10


class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(field_name='name', lookup_expr='icontains')

    class Meta:
        model = Project
        fields = ['name', 'users']


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['name']
    filter_class = ProjectFilter


class ProjectListAPIView(ListAPIView):
    renderer_classes = [JSONRenderer]
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


# class ToDoPagination(PageNumberPagination):
#     page_size = 20


class ToDoViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['project']

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.is_active = False
        instance.save()
        return Response()


class ToDoListAPIView(ListAPIView):
    renderer_classes = [JSONRenderer]
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer


class ToDoUpdateAPIView(UpdateAPIView):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer

