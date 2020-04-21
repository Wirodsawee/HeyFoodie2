# Generated by Django 3.0.4 on 2020-04-21 16:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('HeyFoodie', '0003_auto_20200421_0132'),
    ]

    operations = [
        migrations.CreateModel(
            name='Openday',
            fields=[
                ('day_id', models.IntegerField(primary_key=True, serialize=False)),
                ('day', models.CharField(max_length=3)),
            ],
        ),
        migrations.DeleteModel(
            name='Opendate',
        ),
        migrations.AddField(
            model_name='store',
            name='open_day',
            field=models.ManyToManyField(to='HeyFoodie.Openday'),
        ),
    ]