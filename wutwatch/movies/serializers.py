from rest_framework import serializers

from .models import Movie


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ('id', 'name', 'poster_url', 'release_date', 'watchlists',)
        read_only_fields = ('watchlists',)
