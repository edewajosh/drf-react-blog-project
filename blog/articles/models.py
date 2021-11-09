from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    

class Category(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=500)

    def __str__(self) -> str:
        return self.title
    
class Article(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    authors = models.ManyToManyField(Author)
    title = models.CharField(max_length=255)
    body = models.TextField()
    published_on = models.DateTimeField(auto_now=True)
    modified_on = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.title

