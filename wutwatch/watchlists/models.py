from django.db import models

from movies.models import Movie
from profiles.models import Profile


class WatchList(models.Model):
    name = models.CharField(max_length=100)
    watchers = models.ManyToManyField(Profile, blank=True)
    movies = models.ManyToManyField(Movie, blank=True)

    def __str__(self):
        return self.name
