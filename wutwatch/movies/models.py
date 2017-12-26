from django.db import models


class Movie(models.Model):
    name = models.CharField(max_length=100)
    release_date = models.DateField(blank=True, null=True)
    poster_url = models.URLField(blank=True, null=True)
    moviedb_id = models.CharField(max_length=20, blank=True, null=True)


    @property
    def watchlist(self):
        return self.watchlists

    def __str__(self):
        return self.name
