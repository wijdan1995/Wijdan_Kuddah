from django.urls import path
from . import views
app_name = 'books'
urlpatterns = [
    path('books', views.index, name='root'),
    path('books/new', views.new, name='new'),
    path('books/create', views.create, name='create'),
    path('books/<int:book_id>', views.view, name='view'),
    path('books/<int:book_id>/review', views.review, name='create_review'),
    path('books/<int:review_id>/delete', views.delete_review, name='delete_review'),
    path('users/<int:user_id>', views.user_reviews, name='user_reviews'),
]