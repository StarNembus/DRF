import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, APIClient
from rest_framework.test import force_authenticate, APISimpleTestCase, APITestCase
from .views import UserViewSet
from users.models import User



class TestUsersView(TestCase):

    def test_get_list(self):
        admin = User.objects.create_superuser('kwazart', email='larolimp@gmail.com', password='1')
        factory = APIRequestFactory()
        request = factory.get('/api/users/')
        force_authenticate(request, user=admin)
        view = UserViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_client_get_list(self):
        client = APIClient()
        admin = User.objects.create_superuser('kwazart', email='larolimp@gmail.com', password='1')
        # client.login(username='kwazart', password='1')
        client.force_authenticate(user=admin)
        response = client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestProjectViewSet(APITestCase):

    def test_client_get_list(self):
        # self.client.login(username='kwazart', password='1')
        response = self.client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
