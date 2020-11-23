from django.urls import path
from . import views
app_name = 'books'
urlpatterns = [
    path('books', views.index, name='root'),
    path('books/create', views.create, name='create'),
    path('books/<int:book_id>/like', views.like, name='like'),
    path('books/<int:book_id>/remove_like', views.remove_like, name='remove_like'),
    path('books/<int:book_id>', views.view, name='view'),
    path('books/<int:book_id>/update', views.update, name='update'),
    path('books/<int:book_id>/delete', views.delete, name='delete'),
    path('books/my_favorites', views.user_fav, name='user_fav'),
]