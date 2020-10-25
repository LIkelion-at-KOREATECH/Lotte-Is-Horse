"""LotteIsHorse URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

# Media
from django.conf import settings
from django.conf.urls.static import static

# Including another URLconf
import appMain
import appUser
import appReservation
import model

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # Including another URLconf
    path('', include('appMain.urls')),
    path('', include('appUser.urls')),
    path('', include('appReservation.urls')),
    path('api/', include('model.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)