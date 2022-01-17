import json

from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, APIClient
from rest_framework.test import force_authenticate, APISimpleTestCase, APITestCase

import users
from users.models import User
from .views import ToDoViewSet
from todo.models import ToDo, Project
from mixer.backend.django import mixer


class TestToDoView(TestCase):

    def test_get_list(self):
        admin = User.objects.create_superuser('kwazart', email='larolimp@gmail.com', password='1')
        factory = APIRequestFactory()
        request = factory.get('/api/todo/')
        force_authenticate(request, user=admin)
        view = ToDoViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestToDoViewSet(APITestCase):

    def test_get_list(self):
        admin = User.objects.create_superuser('kwazart', email='larolimp@gmail.com', password='1')
        self.client.login(username='kwazart', password='1')
        response = self.client.get('/api/todo/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestProjectViewSet(APITestCase):
    def test_edit_mixer(self):
        project = mixer.blend(Project, name='Проект')
        admin = User.objects.create_superuser('kwazart', email='larolimp@gmail.com', password='1')
        self.client.login(username='kwazart', password='1')
        response = self.client.get(f'/api/project/{project.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response_project = json.loads(response.content)
        self.assertEqual(response_project['name'], 'Проект')
