import graphene
from graphene_django import DjangoObjectType
from todo.models import Project, ToDo
from users.models import User


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class ToDoType(DjangoObjectType):
    class Meta:
        model = ToDo
        fields = '__all__'


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


# class Query(graphene.ObjectType):
#     hello = graphene.String(default_value='world')

class Query(graphene.ObjectType):
    all_todos = graphene.List(ToDoType)

    def resolve_all_todos(root, info):  #  функциz resolve-р для получения всех книг.
        return ToDo.objects.all()


schema = graphene.Schema(query=Query)

# {
#   allTodos {
# 	id
#   todoText
#   project {
#     id
#     name
#   }
#   user {
#     id
#   }
#   }
# }

# {
#   "data": {
#     "allTodos": [
#       {
#         "id": "1",
#         "todoText": "Как вы относитесь к загрязнению окружающей среды?",
#         "project": {
#           "id": "1",
#           "name": "Социологический опрос - 2"
#         },
#         "user": {
#           "id": "1"
#         }
#       },
#       {
#         "id": "2",
#         "todoText": "Тестовые данные",
#         "project": {
#           "id": "2",
#           "name": "Данные"
#         },
#         "user": {
#           "id": "2"
#         }
#       },
#       {
#         "id": "3",
#         "todoText": "first",
#         "project": {
#           "id": "2",
#           "name": "Данные"
#         },
#         "user": {
#           "id": "2"
#         }
#       }
#     ]
#   }
# }

