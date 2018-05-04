import graphene
from graphene_django.types import DjangoObjectType

from .models import WatchHistory, WatchList


class WatchHistoryType(DjangoObjectType):
    class Meta:
        model = WatchHistory


class WatchListType(DjangoObjectType):
    class Meta:
        model = WatchList


class Query(object):
    watch_history = graphene.Field(WatchHistoryType,
                                   id=graphene.Int(),
                                   movie_id=graphene.Int(),
                                   watchlist_id=graphene.Int())
    all_watch_histories = graphene.List(WatchHistoryType)

    watchlist = graphene.Field(WatchListType, id=graphene.Int(), name=graphene.String())
    all_watchlists = graphene.List(WatchListType)

    def resolve_watch_history(self, info, **kwargs):
        id = kwargs.get('id')
        if id is not None:
            return WatchHistory.objects.get(id=id)

        movie_id = kwargs.get('movie_id')
        watchlist_id = kwargs.get('watchlist_id')
        if movie_id is not None and watchlist_id is not None:
            return WatchHistory.objects.get(movie=movie_id, watchlist=watchlist_id)

    def resolve_all_watch_histories(self, info, **kwargs):
        return WatchHistory.objects.all()

    def resolve_watchlist(self, info, **kwargs):
        id = kwargs.get('id')
        if id is not None:
            return WatchList.objects.get(id=id)

        name = kwargs.get('name')
        if name is not None:
            return WatchList.objects.get(name__iexact=name)

    def resolve_all_watchlists(self, info, **kwargs):
        return WatchList.objects.all()
