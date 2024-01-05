from django.contrib import admin
from .models import airportRates, airportCity, businessForm, Fleet, ReplyCus

# Register your models here.

admin.site.register(airportRates)
admin.site.register(airportCity)
admin.site.register(businessForm)
admin.site.register(Fleet)
admin.site.register(ReplyCus)
