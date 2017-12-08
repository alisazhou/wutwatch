from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView
from rest_framework.authtoken import views
from rest_framework.routers import DefaultRouter

from movies.views import MovieViewSet
from profiles.views import ProfileViewSet
from watchlists.views import WatchListViewSet


router = DefaultRouter()
router.register(r'movies', MovieViewSet, 'movie')
router.register(r'profiles', ProfileViewSet, 'profile')
router.register(r'watchlists', WatchListViewSet, 'watchlist')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/authtoken/', views.obtain_auth_token),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),  # for logging in on browsable endpoints
    re_path('^.*', TemplateView.as_view(template_name='index.html')),
]
