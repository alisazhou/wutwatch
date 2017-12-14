from rest_framework import permissions, status, viewsets
from rest_framework.response import Response

from profiles.models import Profile
from watchlists.models import WatchList
from .models import Movie
from .serializers import MovieSerializer


class IsInSharedWatchlist(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user.profile in Profile.objects.filter(watchlists__movies=obj)


class MovieViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated, IsInSharedWatchlist,)
    serializer_class = MovieSerializer

    def get_queryset(self):
        return Movie.objects.filter(watchlists__watchers=self.request.user.profile)

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
        watchlist.save()
        response.data['watchlists'] = [watchlist.id]

        return response
