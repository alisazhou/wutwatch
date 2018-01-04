from django.contrib import admin

from .models import WatchHistory, WatchList


@admin.register(WatchList)
class WatchListAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'id',)

@admin.register(WatchHistory)
class WatchHistoryAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'id', 'date_added', 'date_watched',)
