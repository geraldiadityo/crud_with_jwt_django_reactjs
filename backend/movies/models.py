from django.db import models

# Create your models here.
class Movie(models.Model):
    movie_name = models.CharField(max_length=100)
    director = models.CharField(max_length=50)
    starring = models.CharField(max_length=100)

    def __str__(self):
        return self.movie_name

