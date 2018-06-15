import django_filters
import graphene
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django.types import DjangoObjectType

from .models import Movie


class MovieType(DjangoObjectType):
    class Meta:
        model = Movie
        interfaces = (graphene.Node, )


class MovieFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='name__icontains')
    released_in = django_filters.NumberFilter(field_name='release_date', lookup_expr='year')
    released_after = django_filters.NumberFilter(field_name='release_date', lookup_expr='year__gt')

    class Meta:
        model = Movie
        fields = ('name', 'released_in', 'released_after', )


class Query(object):
    movie = graphene.Node.Field(MovieType)
    all_movies = DjangoFilterConnectionField(MovieType, filterset_class=MovieFilter)
