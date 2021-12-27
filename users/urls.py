from django.contrib import admin
from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns

from todo.views import ProjectListAPIView
from . import views
from .views import UserListAPIView, UserDetail

urlpatterns = [
    path('users/', UserListAPIView.as_view()),
    path('users/<int:pk>', UserDetail.as_view()),

]

urlpatterns = format_suffix_patterns(urlpatterns)
