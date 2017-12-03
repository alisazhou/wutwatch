from django.contrib.auth.models import User
from django.db import models


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # TODO: add photo field

    @property
    def email(self):
        return self.user.email

    @property
    def full_name(self):
        return '{} {}'.format(self.user.first_name, self.user.last_name)

    def __str__(self):
        return self.full_name
