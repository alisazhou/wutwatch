from rest_framework import status, viewsets
from rest_framework.response import Response

from profiles.models import Profile
from .models import WatchList
from .serializers import WatchListSerializer


class WatchListViewSet(viewsets.ModelViewSet):
    queryset = WatchList.objects.all()
    serializer_class = WatchListSerializer

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)

        # get the newly-created WatchList instance
        new_watchlist = WatchList.objects.get(id=response.data['id'])
        # associate the new watchlist with the current user
        user_profile = Profile.objects.get(user=request.user)
        new_watchlist.watchers.add(user_profile)
        new_watchlist.save()

        response = Response(self.get_serializer(new_watchlist).data, status=status.HTTP_201_CREATED)

        return response

    def update(self, request, *args, **kwargs):
        instance = self.get_object()

        watcher_email = request.data.get('watcher')
        if watcher_email:
            try:
                watcher = Profile.objects.get(user__username=watcher_email)
            except Profile.DoesNotExcept:
                return Response(status=status.HTTP_400_BAD_REQUEST)

            instance.watchers.add(watcher)

        instance.save()

        return Response(self.get_serializer(instance).data)
