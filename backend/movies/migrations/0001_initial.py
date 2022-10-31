# Generated by Django 3.2.15 on 2022-10-29 14:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('movie_name', models.CharField(max_length=100)),
                ('director', models.CharField(max_length=50)),
                ('starring', models.CharField(max_length=100)),
            ],
        ),
    ]
