from django.forms import ModelForm
from . models import Fleet, Airports, City
import users.models


class MyAirport(ModelForm):
    class Meta:
        model = Airports
        fields = '__all__'

class MyCity(ModelForm):
    class Meta:
        model = City
        fields = '__all__'


class MyFleets(ModelForm):
    class Meta:
        model = Fleet
        fields = '__all__'


class MyReply(ModelForm):
    class Meta:
        model = users.models.Reply
        exclude = ('id',)