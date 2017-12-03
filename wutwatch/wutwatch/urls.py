from django.contrib import admin
from django.urls import include, path
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
    path('api/', include(router.urls))
]
