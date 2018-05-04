from django.contrib.auth.models import User
import graphene
from graphene_django.types import DjangoObjectType

from .models import Profile


class UserType(DjangoObjectType):
    class Meta:
        model = User


class ProfileType(DjangoObjectType):
    class Meta:
        model = Profile


class Query(object):
    profile = graphene.Field(ProfileType, id=graphene.Int(), email=graphene.String())
    all_profiles = graphene.List(ProfileType)

    def resolve_profile(self, info, **kwargs):
        id = kwargs.get('id')
        if id is not None:
            return Profile.objects.get(id=id)

        email = kwargs.get('email')
        if email is not None:
            return Profile.objects.get(user__email=email)

    def resolve_all_profiles(self, info, **kwargs):
        return Profile.objects.select_related('user').all()
