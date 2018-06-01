from django.contrib.auth.models import User
import django_filters
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
        interfaces = (graphene.Node, )


class ProfileFilter(django_filters.FilterSet):
    email = django_filters.CharFilter(field_name='user__email', lookup_expr='iexact')
    first_name = django_filters.CharFilter(field_name='user__first_name', lookup_expr='iexact')
    # TODO: how do i use django filter for 'first_name + last_name' icontains query?

    class Meta:
        model = Profile
        fields = ('email', 'first_name', )

    @property
    def qs(self):
        return super(ProfileFilter, self).qs.\
            prefetch_related('watchlists__watchers__user')\
            .filter(watchlists__watchers__user=self.request.user).distinct()


class Query(object):
    profile = graphene.Node.Field(ProfileType)
    all_profiles = DjangoFilterConnectionField(ProfileType, filterset_class=ProfileFilter)
