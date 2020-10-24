from django.shortcuts import render
import requests

# Create your views here.
def home(request):
    response = requests.get('http://localhost:8000/api/product', auth=('admin', 'admin'))
    return render(request, 'home.html', {'product': response.json()})

def detail(request):
    return render(request, 'detail.html')

def basket(request):
    response = requests.get('http://localhost:8000/api/product', auth=('admin', 'admin'))
    return render(request, 'basket.html', {'product': response.json()})