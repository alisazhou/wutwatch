from rest_framework import serializers

from .models import WatchList


class WatchListSerializer(serializers.ModelSerializer):
    class Meta:
        model = WatchList
        fields = ('id', 'name', 'watchers', 'movies')
