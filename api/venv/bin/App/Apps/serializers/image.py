from rest_framework import serializers
from Apps.models.image import Image


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['seq', 'photo', 'seq_fk', 'type']
