from django.contrib import admin
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import include, path, re_path
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView
from graphene_django.views import GraphQLView
from rest_framework.authtoken import views
from rest_framework.routers import DefaultRouter

from movies.views import MovieViewSet, search_movie
from profiles.views import ProfileViewSet
from watchlists.views import WatchHistoryViewSet, WatchListViewSet


router = DefaultRouter()
router.register(r'movies', MovieViewSet, 'movie')
router.register(r'profiles', ProfileViewSet, 'profile')
router.register(r'watchhistories', WatchHistoryViewSet, base_name='watchhistory')
router.register(r'watchlists', WatchListViewSet, 'watchlist')


class LoginRequiredGraphQLView(LoginRequiredMixin, GraphQLView):
    # NOTE: currently still using Django's session auth, so log in via admin page first
    # TODO: use this instead of GraphQLView in urlpatterns to implement
    pass


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/search-movie/', search_movie),
    path('api/authtoken/', views.obtain_auth_token),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),  # for logging in on browsable endpoints
    # TODO: look in adding csrf in the request header for production
    path('graphql/', csrf_exempt(GraphQLView.as_view(graphiql=True))),
    re_path('^.*', TemplateView.as_view(template_name='index.html')),
]
