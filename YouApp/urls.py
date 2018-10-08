from django.urls import path, include
from . import views

from .views import GeneratePdf

urlpatterns = [
    path('', views.index, name='index'),
    path('pdf/', GeneratePdf.as_view()),
    path('drivers/',views.generatePDF_view, name='generatePDF_view'),
]