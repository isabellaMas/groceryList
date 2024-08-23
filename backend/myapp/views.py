from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import GroceryItem, Category
from .serializers import GroceryItemSerializer, CategorySerializer
from django.shortcuts import get_object_or_404

@api_view(['DELETE'])
def delete_grocery(request, id):
    """Delete a grocery item."""
    try:
        item = GroceryItem.objects.get(id=id)
    except GroceryItem.DoesNotExist:
        return Response({'error': 'GroceryItem not found'}, status=404)

    item.delete()
    return Response(status=204)

@api_view(['POST'])
def create_grocery(request):
    serializer = GroceryItemSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

@api_view(['PUT'])
def update_grocery(request, pk):
    grocery = get_object_or_404(GroceryItem, pk=pk)
    new_data = request.data
    grocery.name = new_data.get('name', grocery.name)
    grocery.checked = new_data.get('checked', grocery.checked)
    grocery.quantity = new_data.get('quantity', grocery.quantity)
    grocery.category_id = new_data.get('category_id', grocery.category_id)
    grocery.save()
    serializer = GroceryItemSerializer(grocery)
    return Response(serializer.data)

@api_view(['GET'])
def categories(request):
    """Get all categories."""
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)
    

@api_view(['GET'])
def groceries(request):
    """Get all grocery items, optionally filtered by category."""
    category_id = request.GET.get('category')
    if category_id:
        groceries = GroceryItem.objects.filter(category_id=category_id)
    else:
        groceries = GroceryItem.objects.all()
    serializer = GroceryItemSerializer(groceries, many=True)
    return Response(serializer.data)