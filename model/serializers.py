from .models import Store, Product
from rest_framework import serializers

class StoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    mainImage = serializers.ImageField(use_url=True, allow_null=True)
    detailImage0 = serializers.ImageField(use_url=True, allow_null=True)
    detailImage1 = serializers.ImageField(use_url=True, allow_null=True)
    detailImage2 = serializers.ImageField(use_url=True, allow_null=True)
    detailImage3 = serializers.ImageField(use_url=True, allow_null=True)
    detailImage4 = serializers.ImageField(use_url=True, allow_null=True)
    detailImage5 = serializers.ImageField(use_url=True, allow_null=True)
    detailImage6 = serializers.ImageField(use_url=True, allow_null=True)
    detailImage7 = serializers.ImageField(use_url=True, allow_null=True)
    detailImage8 = serializers.ImageField(use_url=True, allow_null=True)
    detailImage9 = serializers.ImageField(use_url=True, allow_null=True)
    
    class Meta:
        model = Product
        fields = '__all__'