from django.test import TestCase
from django.urls import reverse,resolve
from base.api.views import getItem,getProducts

# Create your tests here.

class TestUrls(TestCase):

	def test_product_available(self):
		url = reverse('getProducts')
		self.assertEquals(resolve(url).func, getProducts)	
