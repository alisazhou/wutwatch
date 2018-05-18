from django.contrib.auth.models import User
import graphene
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django.types import DjangoObjectType

from .models import Profile


class UserType(DjangoObjectType):
    class Meta:
        model = User


class ProfileType(DjangoObjectType):
    class Meta:
        model = Profile
        filter_fields = {
            'user__first_name': ['iexact'],
        }
        interfaces = (graphene.Node, )


class Query(object):
    profile = graphene.Node.Field(ProfileType)
    all_profiles = DjangoFilterConnectionField(ProfileType)
