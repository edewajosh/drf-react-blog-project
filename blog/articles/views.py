from rest_framework.viewsets import ModelViewSet
from articles.models import ( Author, Category, Article)
from articles.serializers import (AuthorSerializer, CategorySerializer, ArticleSerializer)

class AuthorViewSet(ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer