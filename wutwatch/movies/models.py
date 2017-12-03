from django.db import models


class Movie(models.Model):
    name = models.CharField(max_length=100)
    year = models.IntegerField(blank=True, null=True)
    # TODO: add poster and rotten tomato score

    def __str__(self):
        return self.name
