from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('detail', views.detail, name='detail'),
    path('basket', views.basket, name='basket'),
]