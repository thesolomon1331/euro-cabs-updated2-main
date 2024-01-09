from django.urls import path
from . import views

urlpatterns = [
    path('', views.adminDashborad, name='adminDashboard'),
    path('complaints/', views.complaints, name='complaints'),
    path('<str:pk>/showComplaint/', views.showComplaint, name='showComplaint'),
    path('<str:pk>/tokenAccepted/', views.tokenAccepted, name='tokenAccepted'),
    path('addAirports/', views.addAirports, name='addAirports'),
    path('addcity/', views.addCity, name = 'addcity'),
    path('<str:pk>/cityManage/', views.cityManage, name='cityManage'),
    path('<str:pk>/airportManage/', views.airportManage, name = 'airportManage'),
    path('createRoute/', views.CreateRoute, name='createRoute'),
    path('deleteCity/<str:pk>/', views.deleteCity, name='deleteCity'),
    path('deleteAirport/<str:pk>/', views.deleteAirport, name='deleteAirport'),
    path('businessForms/', views.businessForms, name='businessForms'),
    path('<str:pk>/businessForm/', views.businessFormView, name='businessFormView'),
    path('oldComplaints/', views.oldComplaints, name='oldComplaints'),
    path('driverFiles/', views.DriverFiles, name='driverFiles'),
    path('driverFilesView/<str:pk>/', views.DriverFilesView, name='driverFilesView'),
    path('myfleet/', views.MyFleet, name='myfleet'),
    path('managefleet/', views.ManageFleet, name='managefleet'),
    path('editfleet/<str:pk>/', views.EditFleet, name='editfleet'),
    path('deletefleet/<str:pk>/', views.DeleteFleet, name='deletefleet'),
    path('ongoing/', views.onGoing, name='ongoing'),
    path('resolved/<str:pk>/', views.Resolved, name='resolved')
]