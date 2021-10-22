from rest_framework.serializers import ModelSerializer
from articles.models import ( Author, Category, Article)

class AuthorSerializer(ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'

class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ArticleSerializer(ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'