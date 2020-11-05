from django.urls import path     
from . import views
urlpatterns = [
    path('', views.index),
    path('authors', views.authors),
    path('<model>/<int:id>', views.gets),
    path('process/<model>/<int:id>', views.process),
    path('process/books/new', views.newBook),
    path('process/authors/new', views.newAuthor),
]