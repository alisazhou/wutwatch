from rest_framework import serializers

from .models import WatchHistory, WatchList


class WatchListSerializer(serializers.ModelSerializer):
    class Meta:
        model = WatchList
        fields = ('id', 'name', 'watchers', 'movies',)


class WatchHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = WatchHistory
        fields = ('id', 'movie', 'watchlist', 'date_added', 'date_watched',)
