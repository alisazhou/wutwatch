import graphene
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django.types import DjangoObjectType

from .models import Movie


class MovieType(DjangoObjectType):
    class Meta:
        model = Movie
        filter_fields = {
            'name': ['icontains'],  # name_Icontains
            'release_date': ['year', 'year__gt'],  # releaseDate_Year_Gt
        }
        interfaces = (graphene.Node,)


class Query(object):
    movie = graphene.Node.Field(MovieType)
    all_movies = DjangoFilterConnectionField(MovieType)
