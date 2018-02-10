from django.contrib.auth.models import User
from rest_framework import permissions, viewsets

from watchlists.models import WatchList
from .models import Profile
from .serializers import ProfileSerializers


class IsOwnerOrHasCommonWatchlist(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method not in permissions.SAFE_METHODS:
            return False

        is_owner = request.user == obj.user
        has_common_watchlist = Profile.objects.filter(watchlists__watchers=obj).exists()

        return is_owner or has_common_watchlist


class ProfileViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrHasCommonWatchlist,)
    serializer_class = ProfileSerializers

    def get_queryset(self):
        """
        Users can view the profiles of themselves and of other users that they have
        shared watchlists with.
        """
        return Profile.objects.filter(watchlists__watchers__user=self.request.user).distinct()

    def create(self, request, *args, **kwargs):
        # create a user using the email as username
        user = User(username=request.data.get('email'), **request.data)
        user.set_password(request.data['password'])
        user.save()
        # create a Profile instance with the newly created user
        request.data['user'] = user.id
        response = super().create(request, *args, **kwargs)

        return response
