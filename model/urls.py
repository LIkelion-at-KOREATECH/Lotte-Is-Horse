from rest_framework.routers import DefaultRouter #router를 기반으로 작성할겁니다.
from django.urls import path, include
from model import views # views import 해주기

router = DefaultRouter()
router.register('store', views.StoreViewSet) #127.0.0.1:8000/api/store/ 를 views.py의 PostViewSet함수와 연결
router.register('product', views.ProductViewSet)
router.register('sell', views.SellViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')), #rest_framework에 구현되어있는 기능을 사용합시다.
]