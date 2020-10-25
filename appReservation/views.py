from django.shortcuts import render
from django.http import JsonResponse
import requests
from django.http.response import HttpResponse

from LotteIsHorse.settings import BASE_URL  # url 주소

# Create your views here.
def reservation(request):
    responseDic = {}
    for key, value in request.GET.items():
        responseDic[key] = value

    sell = requests.get(BASE_URL + 'sell?id=' + responseDic['sell'], auth=('admin', 'admin')).json()

    responseDic['count'] = sell[0]['count']

    # 출력
    # for key, value in responseDic.items():
    #     print(str(key) + " : " + str(value))
    
    return render(request, 'reservation.html', responseDic)