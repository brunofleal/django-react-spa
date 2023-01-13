from django.db import models


class TodoItem(models.Model):
    name = models.CharField(max_length=60)
    done = models.BooleanField()

    def __str__(self):
        return self.name
