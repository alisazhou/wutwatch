from datetime import date
from rest_framework import permissions, status, viewsets
from rest_framework.decorators import detail_route
from rest_framework.mixins import CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin
from rest_framework.response import Response

from profiles.models import Profile
from .models import WatchHistory, WatchList
from .serializers import WatchHistorySerializer, WatchListSerializer


class IsSharedWatchlist(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user.profile in Profile.objects.filter(watchlists=obj)


class WatchListViewSet(CreateModelMixin,
                       ListModelMixin,
                       RetrieveModelMixin,
                       UpdateModelMixin,
                       viewsets.GenericViewSet):
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
        response.data['watchers'] = [user_profile.id]

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


class IsSharedWatchHistory(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user.profile in Profile.objects.filter(watchlists=obj.watchlist)


class WatchHistoryViewSet(ListModelMixin,
                          RetrieveModelMixin,
                          DestroyModelMixin,
                          viewsets.GenericViewSet):
    permission_classes = (permissions.IsAuthenticated, IsSharedWatchHistory,)
    serializer_class = WatchHistorySerializer

    def get_queryset(self):
        return WatchHistory.objects.filter(watchlist__watchers__user=self.request.user)

    @detail_route(methods=['post'], url_path='mark-watched')
    def mark_watched(self, request, pk=None):
        watchhistory = self.get_object()
        watchhistory.date_watched = date.today()
        watchhistory.save()

        return Response(self.get_serializer(watchhistory).data, status=status.HTTP_200_OK)
