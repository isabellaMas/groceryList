from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

class GroceryItem(models.Model):
    name = models.CharField(max_length=255)
    quantity = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    checked = models.BooleanField(default=False)  # Add this line