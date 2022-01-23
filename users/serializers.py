from rest_framework.serializers import ModelSerializer
from .models import User


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email', 'username']


class UserSerializer2(ModelSerializer):
    class Meta:
        model = User
        fields = ['is_superuser', 'is_staff']

