from rest_framework.serializers import ModelSerializer
from base.models import Product, Cart, Customer


class CustomerSerializer(ModelSerializer):
	class Meta:
		model = Customer
		fields = '__all__'

class ProductSerializer(ModelSerializer):
	class Meta:
		model = Product 
		fields = '__all__'

class CartSerializer(ModelSerializer):
	class Meta:
		model= Cart 
		fields = '__all__'
