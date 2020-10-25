from django.urls import path
from . import views

urlpatterns = [
    path('reservation', views.reservation, name='reservation'),
    path('delivery', views.delivery, name='delivery'),
    path('paymentReservation', views.paymentReservation, name='paymentReservation'),
    path('paymentDelivery', views.paymentDelivery, name='paymentDelivery'),
]