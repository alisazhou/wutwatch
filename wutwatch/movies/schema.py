import graphene
from graphene_django.types import DjangoObjectType

from .models import Movie


class MovieType(DjangoObjectType):
    class Meta:
        model = Movie


class Query(object):
    movie = graphene.Field(MovieType, id=graphene.Int(), name=graphene.String())
    all_movies = graphene.List(MovieType)

    def resolve_movie(self, info, **kwargs):
        id = kwargs.get('id')
        if id is not None:
            return Movie.objects.get(id=id)

        name = kwargs.get('name')
        if name is not None:
            return Movie.objects.get(name__iexact=name)

    def resolve_all_movies(self, info, **kwargs):
        return Movie.objects.all()
