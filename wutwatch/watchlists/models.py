from django.db import models

from movies.models import Movie
from profiles.models import Profile


class WatchList(models.Model):
    name = models.CharField(max_length=100)
    watchers = models.ManyToManyField(Profile, blank=True, related_name='watchlists')
    movies = models.ManyToManyField(
        Movie, blank=True, related_name='watchlists', through='WatchHistory')

    def __str__(self):
        return self.name


class WatchHistory(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    watchlist = models.ForeignKey(WatchList, on_delete=models.CASCADE)
    date_added = models.DateField(auto_now_add=True)
    date_watched = models.DateField(blank=True, null=True)

    def __str__(self):
        return '{} in watchlist {}'.format(
            self.movie.name, self.watchlist.name)

    class Meta:
        unique_together = (('movie', 'watchlist'),)
