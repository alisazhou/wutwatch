from rest_framework import viewsets

from .models import Profile
from .serializers import ProfileSerializers


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializers
