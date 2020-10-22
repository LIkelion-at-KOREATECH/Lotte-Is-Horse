from django.db import models

# Create your models here.
class Store(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255)
    brand = models.CharField(max_length=255)
    price = models.IntegerField()
    mainImage = models.ImageField(upload_to='product/', null=True, blank=True)
    detailImage0 = models.ImageField(upload_to='product/', null=True, blank=True)
    detailImage1 = models.ImageField(upload_to='product/', null=True, blank=True)
    detailImage2 = models.ImageField(upload_to='product/', null=True, blank=True)
    detailImage3 = models.ImageField(upload_to='product/', null=True, blank=True)
    detailImage4 = models.ImageField(upload_to='product/', null=True, blank=True)
    detailImage5 = models.ImageField(upload_to='product/', null=True, blank=True)
    detailImage6 = models.ImageField(upload_to='product/', null=True, blank=True)
    detailImage7 = models.ImageField(upload_to='product/', null=True, blank=True)
    detailImage8 = models.ImageField(upload_to='product/', null=True, blank=True)
    detailImage9 = models.ImageField(upload_to='product/', null=True, blank=True)

    def __str__(self):
        return self.name

class Sell(models.Model):
    store = models.ForeignKey(Store, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    count = models.IntegerField(default=0)

    def __str__(self):
        return self.store.name + " - " + self.product.name