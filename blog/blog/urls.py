from django.contrib import admin
from django.urls import path, include

from articles.models import Article

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/articles/', include('articles.urls')),
]
