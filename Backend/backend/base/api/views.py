from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework import status
import jwt
from django.conf import settings

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView 

from .serializers import ProductSerializer, CartSerializer, CustomerSerializer
from base.models import Product, Cart
from django.contrib.auth.models import User 
from django.shortcuts import get_object_or_404


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
	@classmethod
	def get_token(cls, user):
		token = super().get_token(user)

		# Add custom claims
		token['username'] = user.username
		# ...

		return token


class MyTokenObtainPairView(TokenObtainPairView):
	serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):
	routes=[
	'/api/token',
	'/api/token/refresh'
	]

	return Response(routes)

@api_view(['GET'])
def getProducts(request):
	products = Product.objects.all()
	serializer = ProductSerializer(products, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def getItem(request, id):
	product = Product.objects.get(id=id)
	serializer = ProductSerializer(product, many=False)
	return Response(serializer.data)



@api_view(['POST','GET'])
@permission_classes([IsAuthenticated])
def cart(request, format=None):
	if(request.method == 'POST'):
		user_id= request.user_id

		user = User.objects.get(id=user_id)
		try:
			cart = Cart.objects.get(user=user)
		except Cart.DoesNotExist:
			cart = Cart.objects.create(user=user)
		items = request.data.get('items', [])

		for item in items:
			product_id = item.get('productId')
			quantity = item.get('quantity')

			product = get_object_or_404(Product,id=product_id)
			if(product):
				cart.add_product(product,quantity)
				print(product.price)
				cart.totalAmount(product.price,quantity)

		return Response({'message':'Add to Cart'})

	if(request.method=='GET'):
		# token = request.META.get('HTTP_AUTHORIZATION').split(' ')[1]
		# decoded_token = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
		# user_id = decoded_token['user_id']
		user = request.user.id

		cart = Cart.objects.filter(user=user).first()
		serializer = CartSerializer(cart)
		return Response(serializer.data)
