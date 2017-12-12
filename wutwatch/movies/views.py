from rest_framework import status, viewsets
from rest_framework.response import Response

from watchlists.models import WatchList
from .models import Movie
from .serializers import MovieSerializer


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

    def create(self, request, *args, **kwargs):
        try:
            watchlist_id = request.data['watchlist']
        except KeyError:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        try:
            watchlist = WatchList.objects.get(id=watchlist_id)
        except WatchList.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        # create the Movie instance, and add it to the designated WatchList
        response = super().create(request, *args, **kwargs)
        watchlist.movies.add(response.data['id'])
        response.data['watchlists'] = [watchlist.id]

        return response
