from rest_framework import serializers
from .models import tasks

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = tasks
        # fields: ("id", "title", "description", "done")
        fields = '__all__'
