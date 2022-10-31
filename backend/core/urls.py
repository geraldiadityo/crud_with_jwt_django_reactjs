from django.urls import path

from .views import (
    current_user,
    UserList,
)

urlpatterns = [
    path('current-user/',current_user),
    path('users/',UserList.as_view()),
]
