from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import ToDoListAPIView, ProjectListAPIView

urlpatterns = [
    path('todo/<int:pk>', ToDoListAPIView.as_view()),
    path('project/<int:pk>', ProjectListAPIView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
