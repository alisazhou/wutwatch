import json
import os
import requests
from rest_framework import permissions, status, viewsets
from rest_framework.decorators import api_view
from rest_framework.mixins import CreateModelMixin, ListModelMixin, RetrieveModelMixin
from rest_framework.response import Response

from profiles.models import Profile
from watchlists.models import WatchHistory, WatchList
from .models import Movie
from .serializers import MovieSerializer


class IsInSharedWatchlist(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user.profile in Profile.objects.filter(watchlists__movies=obj)


class MovieViewSet(CreateModelMixin,
                   ListModelMixin,
                   RetrieveModelMixin,
                   viewsets.GenericViewSet):
    permission_classes = (permissions.IsAuthenticated, IsInSharedWatchlist,)
    serializer_class = MovieSerializer

    def get_queryset(self):
        return Movie.objects.filter(watchlists__watchers=self.request.user.profile).distinct()

    def create(self, request, *args, **kwargs):
        try:
            watchlist_id = request.data['watchlist']
            watchlist = WatchList.objects.get(id=watchlist_id)
        except (KeyError, WatchList.DoesNotExist):
            return Response(
                data={'error': 'Need a valid watchlist for the movie'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # movie has been previously added
        try:
            movie = Movie.objects.get(moviedb_id=request.data.get('moviedb_id'))
            response = Response(self.get_serializer(movie).data, status=status.HTTP_200_OK)
        # movie is not in DB
        except Movie.DoesNotExist:
            response = super().create(request, *args, **kwargs)
            movie = Movie.objects.get(id=response.data['id'])

        watchhistory, _ = WatchHistory.objects.get_or_create(movie=movie, watchlist=watchlist)
        if watchlist_id not in response.data['watchlists']:
            response.data['watchlists'].append(watchlist_id)

        return response


@api_view(http_method_names=['POST'])
def search_movie(request, *args, **kwargs):
    search_url = 'https://api.themoviedb.org/3/search/movie'
    moviedb_apikey = os.getenv('MOVIEDB_APIKEY')
    movie_name = request.data['movie_name']
    params = {'api_key': moviedb_apikey, 'include_adult': True, 'page': 1, 'query': movie_name}
    moviedb_response = requests.get(search_url, params=params)
    # TODO: check if response is okay, else return error
    parsed_response = json.loads(moviedb_response.text)
    try:
        result = parsed_response['results'][0]
        movie_info = {
            'found': True,
            'name': result['title'],
            'moviedb_id': result['id'],
            'poster_url': 'https://image.tmdb.org/t/p/w300{}'.format(result['poster_path']),
            'release_date': result['release_date'],
        }
    except IndexError:
        movie_info = {
            'found': False,
        }

    return Response(movie_info, status=status.HTTP_200_OK)
