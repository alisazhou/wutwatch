from django.contrib.auth.models import User
from rest_framework import viewsets

from .models import Profile
from .serializers import ProfileSerializers


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializers

    def create(self, request, *args, **kwargs):
        # create a user using the email as username
        user = User.objects.create(username=request.data.get('email'), **request.data)
        # create a Profile instance with the newly created user
        request.data['user'] = user.id
        response = super().create(request, *args, **kwargs)

        return response
