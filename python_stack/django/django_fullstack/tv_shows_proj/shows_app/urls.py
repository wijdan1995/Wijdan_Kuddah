from django.urls import path     
from . import views
urlpatterns = [
    path('', views.index),
    path('shows', views.showsList),
    path('shows/new', views.showsNew),
    path('shows/create', views.showsCreate),
    path('shows/<int:id>', views.showsView),
    path('shows/<int:id>/edit', views.showsEdit),
    path('shows/<int:id>/update', views.showsUpdate),
    path('shows/<int:id>/destroy', views.showsDestroy),
]