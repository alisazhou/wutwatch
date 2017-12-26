# Generated by Django 2.0 on 2017-12-26 22:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('watchlists', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='watchlist',
            name='movies',
            field=models.ManyToManyField(blank=True, related_name='watchlists', to='movies.Movie'),
        ),
        migrations.AlterField(
            model_name='watchlist',
            name='watchers',
            field=models.ManyToManyField(blank=True, related_name='watchlists', to='profiles.Profile'),
        ),
    ]