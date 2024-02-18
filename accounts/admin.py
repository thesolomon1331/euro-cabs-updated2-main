from django.contrib import admin
from .models import CustomUser, ExtendUser, AdminKey
from django.contrib.auth.admin import UserAdmin

# Register your models here.

admin.site.register(CustomUser, UserAdmin)
admin.site.register(ExtendUser)
admin.site.register(AdminKey)