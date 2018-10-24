from django.urls import path, include
from . import views

from .views import GeneratePdf

urlpatterns = [
    path('', views.index, name='index'),
    path('pdf/', GeneratePdf.as_view()),
    path('drivers/',views.generatePDF_view, name='generatePDF_view'),
    path('service/<int:number>/<int:year>/<int:month>/', views.serviceReport, name='serviceReport'),
    path('all/<int:year>/<int:month>/', views.Generalservice, name='Generalservice'),
    path('next/', views.next, name = 'next'),
]
