from django.db import models

# Create your models here.
class Product(models.Model):
	productName = models.CharField(max_length=50)
	category = models.CharField(max_length=50)
	desc = models.CharField(max_length=300)
	price = models.IntegerField(default=1)
	image = models.ImageField(upload_to="product/images",default="")

	def __str__(self):
		return self.productName


class Cart(models.Model):
	created = models.DateTimeField(auto_now_add=True)
	total = models.PositiveIntegerField(default=1)


	def __str__(self):
		return "Cart: " + self.id


