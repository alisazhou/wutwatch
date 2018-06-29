import django_filters
import graphene
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django.types import DjangoObjectType


from .models import WatchHistory, WatchList
from profiles.models import Profile


class WatchHistoryType(DjangoObjectType):
    class Meta:
        model = WatchHistory
        interfaces = (graphene.Node, )


class WatchHistoryFilter(django_filters.FilterSet):
    movie = django_filters.CharFilter(field_name='movie__name', lookup_expr='icontains')
    watchlist = django_filters.CharFilter(field_name='watchlist__name', lookup_expr='iexact')

    class Meta:
        model = WatchHistory
        fields = ('movie', 'watchlist', )

    @property
    def qs(self):
        return super(WatchHistoryFilter, self).qs \
            .prefetch_related('watchlist__watchers__user') \
            .filter(watchlist__watchers__user=self.request.user)


class WatchListType(DjangoObjectType):
    class Meta:
        model = WatchList
        interfaces = (graphene.Node, )


class WatchListFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='iexact')

    class Meta:
        model = WatchHistory
        fields = ('name',)

    @property
    def qs(self):
        return super(WatchListFilter, self).qs \
            .prefetch_related('watchers__user') \
            .filter(watchers__user=self.request.user)


class CreateWatchListMutation(graphene.Mutation):
    class Input:
        name = graphene.String()

    status = graphene.Int()
    watchlist = graphene.Field(WatchListType)

    def mutate(self, info, name):
        watchlist = WatchList.objects.create(name=name)
        watcher = Profile.objects.get(user=info.context.user)
        watchlist.watchers.add(watcher)
        return CreateWatchListMutation(watchlist=watchlist, status=200)

class Query(object):
    watch_history = graphene.Node.Field(WatchHistoryType)
    all_watch_histories = DjangoFilterConnectionField(
        WatchHistoryType,
        filterset_class=WatchHistoryFilter)

    watchlist = graphene.Node.Field(WatchListType)
    all_watchlists = DjangoFilterConnectionField(WatchListType, filterset_class=WatchListFilter)


class Mutation(object):
    create_watchlist = CreateWatchListMutation.Field()
