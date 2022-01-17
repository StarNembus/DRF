from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import permissions
from rest_framework.urlpatterns import format_suffix_patterns
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from todo.views import ProjectListAPIView
from . import views
from .views import UserListAPIView, UserDetail

urlpatterns = [
    path('users/', UserListAPIView.as_view()),
    path('users/<int:pk>', UserDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)

schema_view = get_schema_view(
   openapi.Info(
      title="DRF Project",
      default_version='0.1',
      description="Documentation to out project",
      contact=openapi.Contact(email="admin@admin.local"),
      license=openapi.License(name="MIT License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)
