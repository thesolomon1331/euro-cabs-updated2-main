from django.forms import ModelForm
from . models import airportCity, Fleet
import users.models


class MyAirportCity(ModelForm):
    class Meta:
        model = airportCity
        exclude = ('id', 'fromCity')

class MyFleets(ModelForm):
    class Meta:
        model = Fleet
        fields = '__all__'


class MyReply(ModelForm):
    class Meta:
        model = users.models.Reply
        exclude = ('id',)