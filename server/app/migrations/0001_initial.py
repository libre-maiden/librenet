# Generated by Django 4.0.5 on 2022-06-19 17:42

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Posts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, verbose_name='Title')),
                ('text', models.TextField(max_length=5000, verbose_name='Text')),
                ('date', models.DateField(auto_now_add=True, verbose_name='Date')),
            ],
        ),
    ]
