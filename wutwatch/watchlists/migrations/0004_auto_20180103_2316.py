# Generated by Django 2.0 on 2018-01-03 23:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0003_auto_20180103_2313'),
        ('watchlists', '0003_auto_20180103_2313'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='watchlist',
            name='_movies',
        ),
        migrations.AddField(
            model_name='watchlist',
            name='movies',
            field=models.ManyToManyField(blank=True, related_name='watchlists', through='watchlists.WatchHistory', to='movies.Movie'),
        ),
    ]
