from django.db import models

class Image(models.Model):
    image = models.ImageField(upload_to='uploads/')

class CroppingArea(models.Model):
    image = models.ForeignKey(Image, on_delete=models.CASCADE)
    top = models.PositiveIntegerField()
    left = models.PositiveIntegerField()
    width = models.PositiveIntegerField()
    height = models.PositiveIntegerField()
