from rest_framework.relations import StringRelatedField
from rest_framework.serializers import ModelSerializer
from .models import ToDo, Project


class ProjectSerializer(ModelSerializer):
    # users = StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class ToDoSerializer(ModelSerializer):
    class Meta:
        model = ToDo
        fields = '__all__'
