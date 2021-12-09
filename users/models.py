from django.db import models
from django.contrib.auth.models import AbstractUser


# Client -> Router/URL -> View -> Serializer -> Model


class User(AbstractUser):
    username = models.CharField(max_length=254, unique=True)
    firstname = models.CharField(max_length=64)
    lastname = models.CharField(max_length=64)
    email = models.EmailField(max_length=254, unique=True)

    def __str__(self):
        return f'{self.username} {self.first_name}  {self.last_name}  {self.email}'
