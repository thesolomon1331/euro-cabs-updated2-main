from django.urls import path
from . import views

urlpatterns = [
    path('', views.adminDashborad, name='adminDashboard'),
    path('complaints/', views.complaints, name='complaints'),
    path('<str:pk>/showComplaint/', views.showComplaint, name='showComplaint'),
    path('<str:pk>/tokenAccepted/', views.tokenAccepted, name='tokenAccepted'),
    path('addAirports/', views.addAirports, name='addAirports'),
    path('<str:pk>/manage/', views.cityManage, name='cityManage'),
    path('<str:pk>/editCity/', views.editCity, name='editCity'),
    path('<str:pk>/deleteCity/', views.deleteCity, name='deleteCity'),
    path('<str:pk>/deleteAirport/', views.deleteAirport, name='deleteAirport'),
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