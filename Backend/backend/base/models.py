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
	user = models.ForeignKey(User, on_delete=models.CASCADE,null=True,)
	products = models.ManyToManyField(Product, blank=True)
	quantities = models.JSONField(default=list)
	created = models.DateTimeField(auto_now_add=True)
	total_price=models.PositiveIntegerField(null=True)

	def __str__(self):
		return str(self.user)
	
	def totalAmount(self,price,quantity):
		self.total_price += quantity*price

	def add_product(self, product, quantity):
	    if product not in self.products.all():
	        self.products.add(product)
	        self.quantities.append(quantity)
	    else:
	        index = list(self.products.all()).index(product)
	        self.quantities[index] += quantity
	    self.save()

	def remove_product(self, product):
	    if product in self.products.all():
	        index = list(self.products.all()).index(product)
	        self.products.remove(product)
	        del self.quantities[index]
	        self.save()


class Order(models.Model):
	user=models.ForeignKey(User,on_delete=models.SET_NULL, blank=True,null=True)
	dateOrder = models.DateTimeField(auto_now_add=True)
	compeleted = models.BooleanField(default=False, null=True, blank=False)
	transactionId = models.CharField(max_length=200, null=True)

	def __str__(self):
		return str(self.id)
