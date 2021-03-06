from rest_framework import serializers

from .models import Profile


class ProfileSerializers(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id', 'email', 'full_name', 'user')
