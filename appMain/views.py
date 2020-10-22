from django.shortcuts import render
import requests

# Create your views here.
def home(request):
    product = requests.get('http://localhost:8000/api/product', auth=('admin', 'admin'))
    return render(request, 'home.html', {'product' : product.json()})

def detail(request):
    requestGet = request.GET
    store = requests.get('http://localhost:8000/api/store?id=' + requestGet.get('storeID'), auth=('admin', 'admin'))
    product = requests.get('http://localhost:8000/api/product?id=' + requestGet.get('productID'), auth=('admin', 'admin'))
    sell = requests.get('http://localhost:8000/api/sell?store=' + requestGet.get('storeID') + '&product=' + requestGet.get('productID'), auth=('admin', 'admin'))
    
    returnDic = {
        'store': store.json(),
        'product': product.json(),
        'sell': sell.json(),
    }

    return render(request, 'detail.html', returnDic)