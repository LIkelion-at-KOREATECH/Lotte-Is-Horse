from django.shortcuts import render
from django.http import JsonResponse
import requests
from django.http.response import HttpResponse
from model.models import Basket

from LotteIsHorse.settings import BASE_URL  # url 주소

# Create your views here.
def home(request):
    if request.method == "POST":
        try:
            if (request.POST.get('storeName') == ""):
                
                raise
            store = requests.get(BASE_URL + 'store?name=' + request.POST.get('storeName'), auth=('admin', 'admin')).json()
            print(store)
            sells = requests.get(BASE_URL + 'sell?store=' + str(store[0]['id']), auth=('admin', 'admin')).json()
            print("@@@@@@@@@@@2")
            products = []
            for sell in sells:
                products.extend(requests.get(BASE_URL + 'product?id=' + str(sell['product']), auth=('admin', 'admin')).json())
            print("@@@@@@@@@@@3")

            # 하나로 합치기
            for product in products:
                product['store'] = store[0]['id']
                product['storeName'] = store[0]['name']
                for sell in sells:
                    if (product['id'] == sell['product']):
                        product['sell'] = sell['id']
                        break

            responseDic = {
                'products': products
            }
        
            #출력
            # print("@@@@@@@@@@@")
            # for product in products:
            #     print("\n===========" + product['name'])
            #     for i in product:
            #         print(str(i) + " : " + str(product[i]))
        
            return JsonResponse(responseDic)
        except:
            return
    else:
        return render(request, 'home.html')

def detail(request):
    responseDic = {}
    for key, value in request.GET.items():
        responseDic[key] = value

    sell = requests.get(BASE_URL + 'sell?id=' + responseDic['sell'], auth=('admin', 'admin')).json()

    responseDic['count'] = sell[0]['count']

    # 출력
    # for key, value in responseDic.items():
    #     print(str(key) + " : " + str(value))
    return render(request, 'detail.html', responseDic)


def basket(request):
    responseDic = {}
    for key, value in request.GET.items():
        responseDic[key] = value

    # sell = requests.get(BASE_URL + 'sell?id=' + responseDic['sell'], auth=('admin', 'admin')).json()

    # responseDic['count'] = sell[0]['count']

    

    Bs = Basket.objects.all()

    print(Bs)

    return render(request, 'basket.html', responseDic)
