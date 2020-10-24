from rest_framework import viewsets
from .models import Store, Product, Sell
from .serializers import StoreSerializer, ProductSerializer, SellSerializer

# Create your views here.
class StoreViewSet(viewsets.ModelViewSet):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer
    filterset_fields = ['id', 'name']

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filterset_fields = ['id', 'name', 'brand', 'price']

class SellViewSet(viewsets.ModelViewSet):
    queryset = Sell.objects.all()
    serializer_class = SellSerializer
    filterset_fields = ['id', 'store', 'product', 'count']