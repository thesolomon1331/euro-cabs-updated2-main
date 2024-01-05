from django.contrib import admin
from . models import ComplaintForm, DriverFiles, Reply

# Register your models here.

admin.site.register(ComplaintForm)
admin.site.register(DriverFiles)
admin.site.register(Reply)
