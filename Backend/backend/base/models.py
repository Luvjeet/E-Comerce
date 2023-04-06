from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Customer(models.Model):
	user=models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
	name=models.CharField(max_length=50,null=True)
	email=models.CharField(max_length=100,null=True)

	def __str__(self):
		return self.name

class Product(models.Model):
	productName = models.CharField(max_length=50)
	category = models.CharField(max_length=50)
	desc = models.CharField(max_length=300)
	price = models.IntegerField(default=1)
	image = models.ImageField(upload_to="product/images",default="")

	def __str__(self):
		return self.productName


class Cart(models.Model):
	customer = models.ForeignKey(Customer, on_delete=models.CASCADE,null=True,)
	product = models.ForeignKey(Product, on_delete=models.CASCADE,null=True)
	quantity = models.PositiveIntegerField(default=1)
	created = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return "Cart: " + self.id
	
	@property
	def total_price(self):
		return self.product*self.quantity


class Order(models.Model):
	customer=models.ForeignKey(Customer,on_delete=models.SET_NULL, blank=True,null=True)
	dateOrder = models.DateTimeField(auto_now_add=True)
	compeleted = models.BooleanField(default=False, null=True, blank=False)
	transactionId = models.CharField(max_length=200, null=True)

	def __str__(self):
		return str(self.id)
