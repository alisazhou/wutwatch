from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter

from profiles.views import ProfileViewSet


router = DefaultRouter()
router.register(r'profiles', ProfileViewSet, 'profile')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
