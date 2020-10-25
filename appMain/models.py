from django.db import models

# Create your models here.

class Basket(models.Model):
    
    brands = models.TextField()
    name = models.TextField()
    price = models.TextField()
    storeName = models.TextField()
    count = models.IntegerField()
    pic = models.TextField()

    def __str__(self):
         return self.name