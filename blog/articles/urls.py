from django.urls import path, include
from articles.views import (ArticleViewSet, AuthorViewSet, CategoryViewSet)
from rest_framework.routers import DefaultRouter

router = DefaultRouter(trailing_slash=False)
router.register(r'author', AuthorViewSet)
router.register(r'category', CategoryViewSet)
router.register(r'article', ArticleViewSet)


urlpatterns = router.urls

# urlpatterns = [
#     path('v1/', include(router.urls, 'articles')),
# ]
