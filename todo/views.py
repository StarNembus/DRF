from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .serializers import ToDoSerializer
from .serializers import ProjectSerializer
from .models import Project, ToDo


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ToDoViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer

