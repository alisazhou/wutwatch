from rest_framework import permissions, status, viewsets
from rest_framework.decorators import detail_route
from rest_framework.response import Response

from movies.models import Movie
from profiles.models import Profile
from .models import WatchList
from .serializers import WatchListSerializer


class IsSharedWatchlist(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user.profile in Profile.objects.filter(watchlists=obj)


class WatchListViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated, IsSharedWatchlist,)
    serializer_class = WatchListSerializer

    def get_queryset(self):
        return WatchList.objects.filter(watchers__user=self.request.user)

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)

        # get the newly-created WatchList instance
        new_watchlist = WatchList.objects.get(id=response.data['id'])
        # associate the new watchlist with the current user
        user_profile = Profile.objects.get(user=request.user)
        new_watchlist.watchers.add(user_profile)

        # TODO: can just update response.data['watchers']
        response = Response(self.get_serializer(new_watchlist).data, status=status.HTTP_201_CREATED)

        return response

    def update(self, request, *args, **kwargs):
        instance = self.get_object()

        watcher_email = request.data.get('watcher')
        if watcher_email:
            try:
                watcher = Profile.objects.get(user__username=watcher_email)
            except Profile.DoesNotExist:
                return Response(status=status.HTTP_400_BAD_REQUEST)

            instance.watchers.add(watcher)

        return Response(self.get_serializer(instance).data)

    @detail_route(methods=['post'], url_path='remove-movie')
    def remove_movie(self, request, pk=None):
        watchlist = WatchList.objects.get(id=pk)
        try:
            movie = Movie.objects.get(id=request.data.get('movie'))
        except (KeyError, Movie.DoesNotExist):
            data = {'movie': 'Need a valid movie id to be removed from this watchlist'}
            return Response(data=data, status=status.HTTP_400_BAD_REQUEST)

        watchlist.movies.remove(movie)

        response = Response(self.get_serializer(watchlist).data)

        return response
