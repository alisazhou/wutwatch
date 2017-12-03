from django.contrib.auth.models import User
from django.db import models


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # TODO: add photo field

    def __str__(self):
        return '{} {}'.format(self.user.first_name, self.user.last_name)
