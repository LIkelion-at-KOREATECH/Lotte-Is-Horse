from django.contrib import admin
from .models import Store, Product, Sell

# Register your models here.
admin.site.register(Store)
admin.site.register(Product)
admin.site.register(Sell)