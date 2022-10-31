from django.urls import path, re_path
from .views import (
    movie_list,
    movie_detail,
)

urlpatterns = [
    re_path(r'^api/(?P<pk>[0-9]+)/$',movie_detail),
    path('api/',movie_list),
]
