# Generated by Django 3.0.4 on 2020-05-12 16:09

from django.db import migrations
import multiselectfield.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('HeyFoodie', '0003_bestsellmenu_day_bestsellmenu_month_customer_history_order_order_detail_owner_payment_report_day_rep'),
    ]

    operations = [
        migrations.AlterField(
            model_name='store',
            name='open_day',
            field=multiselectfield.db.fields.MultiSelectField(choices=[(1, 'MON'), (2, 'TUE'), (3, 'WED'), (4, 'THU'), (5, 'FRI'), (6, 'SAT'), (7, 'SUN')], max_length=20),
        ),
    ]
