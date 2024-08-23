from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.categories, name='categories'),
    path('groceries/', views.groceries, name='groceries'),
    path('groceries/create/', views.create_grocery, name='create_grocery'),
    path('groceries/delete/<int:id>/', views.delete_grocery, name='delete_grocery'),
    path('groceries/update/<int:pk>/', views.update_grocery, name='update_grocery'),  # New update URL
]