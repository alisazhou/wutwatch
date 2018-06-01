import graphene
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django.types import DjangoObjectType


from .models import WatchHistory, WatchList


class WatchHistoryType(DjangoObjectType):
    class Meta:
        model = WatchHistory
        filter_fields = {
            'movie__name': ['icontains'],
            'watchlist__name': ['iexact'],
        }
        interfaces = (graphene.Node,)


class WatchListType(DjangoObjectType):
    class Meta:
        model = WatchList
        filter_fields = {
            'name': ['iexact'],
        }
        interfaces = (graphene.Node,)


class Query(object):
    watch_history = graphene.Node.Field(WatchHistoryType)
    all_watch_histories = DjangoFilterConnectionField(WatchHistoryType)

    watchlist = graphene.Node.Field(WatchListType)
    all_watchlists = DjangoFilterConnectionField(WatchListType)
