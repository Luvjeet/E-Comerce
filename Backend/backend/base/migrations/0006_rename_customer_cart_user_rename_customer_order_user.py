# Generated by Django 4.1.7 on 2023-04-08 23:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_alter_cart_customer_alter_order_customer'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cart',
            old_name='customer',
            new_name='user',
        ),
        migrations.RenameField(
            model_name='order',
            old_name='customer',
            new_name='user',
        ),
    ]
