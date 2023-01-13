from rest_framework import viewsets

from .serializers import TodoItemSerializer
from .models import TodoItem


class TodoItemViewSet(viewsets.ModelViewSet):
    queryset = TodoItem.objects.all().order_by('name')
    serializer_class = TodoItemSerializer
