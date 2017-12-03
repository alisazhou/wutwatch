from rest_framework import viewsets

from .models import WatchList
from .serializers import WatchListSerializer


class WatchListViewSet(viewsets.ModelViewSet):
    queryset = WatchList.objects.all()
    serializer_class = WatchListSerializer
