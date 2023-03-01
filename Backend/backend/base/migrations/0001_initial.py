# Generated by Django 4.1.7 on 2023-02-26 20:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('producName', models.CharField(max_length=50)),
                ('category', models.CharField(max_length=50)),
                ('desc', models.CharField(max_length=300)),
                ('price', models.IntegerField(default=1)),
                ('image', models.ImageField(default='', upload_to='product/images')),
            ],
        ),
    ]