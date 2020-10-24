from django.contrib import admin
from .models import Store, Product, Sell, Basket

# Register your models here.
admin.site.register(Store)
admin.site.register(Product)
admin.site.register(Sell)
admin.site.register(Basket)