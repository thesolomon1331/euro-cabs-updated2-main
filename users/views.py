from django.shortcuts import render, get_object_or_404, redirect
from django.http import JsonResponse
from .models import ComplaintForm, DriverFiles, Reply
import dashboard.models
from .forms import MyBusinessForm, MyDriver
from django.contrib import messages
from .custom import generate_unique_random_numbers



# Create your views here.


#Function to Home Page

def home(request):
    data = dashboard.models.airportRates.objects.all()
    # other = ''
    # if request.method == 'POST':
    #     userName = request.POST['userName']
    #     dateOfJourney = request.POST['dateOfJourney']
    #     phoneNumber = request.POST['phoneNumber']
    #     pickUpAddress = request.POST['pickUpAddress']
    #     dropAddress = request.POST['dropAddress']
    #     complaintRegarding = request.POST['complaintRegarding']
    #     if request.POST['other']:
    #         other = request.POST['other']
    #         complaintRegarding = complaintRegarding + '-----' + other
    #     description = request.POST['description']

    #     form = ComplaintForm(userName = userName, 
    #                          dateOfJourney = dateOfJourney, 
    #                          phoneNumber = phoneNumber,
    #                          pickUpAddress = pickUpAddress,
    #                          dropAddress = dropAddress,
    #                          complaintRegarding = complaintRegarding,
    #                          description = description
    #                          )
        
    #     try: 
    #         form.save()
    #     except:
    #         print("Something Went Wrong.....") 
    # else:
    #     print("Something Went Wrong Here also......")
    return render(request, 'user/index.html', {'data':data})


#Function to Privacy Policy

def privacyAndPolicy(request):
    return render(request, 'user/privacy&policy.html')


#Function to Business Terms and Conditions

def businessTerms(request):
    return render(request, 'user/BusinessT&C.html')


#Function to Corporate

def corporate(request):
    return render(request, 'user/corporate.html')


#Function to Rides Page

def rides(request):
    return render(request, 'user/rides.html')


#Function to Driver Registration

def driverRegister(request):
    return render(request, 'user/DriverLogin.html')


#Function to Website Terms

def websiteTerms(request):
    return render(request, 'user/websiteTerms.html')



# Fuction to Get Complaint from user and store it in the Database

def complaintForm(request):
    other = ''
    if request.method == 'POST':
        userName = request.POST['userName']
        mail = request.POST['mail']
        dateOfJourney = request.POST['dateOfJourney']
        phoneNumber = request.POST['phoneNumber']
        pickUpAddress = request.POST['pickUpAddress']
        dropAddress = request.POST['dropAddress']
        complaintRegarding = request.POST['complaintRegarding']
        if request.POST['other']:
            other = request.POST['other']
            complaintRegarding = complaintRegarding + '-----' + other
        description = request.POST['description']

        form = ComplaintForm(ComplintId = generate_unique_random_numbers(8),
                             mail = mail,
                            userName = userName, 
                             dateOfJourney = dateOfJourney, 
                             phoneNumber = phoneNumber,
                             pickUpAddress = pickUpAddress,
                             dropAddress = dropAddress,
                             complaintRegarding = complaintRegarding,
                             description = description
                             )
        
        try: 
            form.save()
            return render(request, 'user/complaintsuccess.html')
        except:
            messages.error("Something Went Wrong.....")
    else:
        print("Something Went Wrong Here also......")
    
        



# Function to get the Business Details from the Client

def businessForm(request):
    # form = MyBusinessForm()
    # if request.method == 'POST':
    #     data = MyBusinessForm(request.POST)
    #     if data.is_valid():
    #         data.save()
    #     # else:
    #         # print("Something Went Wrong...")
    if request.method == "POST":
        companyName = request.POST['companyName']
        natureOfBusiness = request.POST['natureOfBusiness']
        WebsiteAddress = request.POST['WebsiteAddress']
        YearCompanyWasEstablished = request.POST['YearCompanyWasEstablished']
        contactName = request.POST['contactName']
        jobTitle = request.POST['jobTitle']
        department = request.POST['department']
        telephoneNumber = request.POST['telephoneNumber']
        emailAddress = request.POST['emailAddress']
        monthlyCreditAmount = request.POST['monthlyCreditAmount']
        monthlySpend = request.POST['monthlySpend']
        authorisedBy = request.POST['authorisedBy']

        form = dashboard.models.businessForm(Company_Name = companyName, Nature_Of_Business = natureOfBusiness, Website_Address = WebsiteAddress, Year_Company_Est = YearCompanyWasEstablished,contactName = contactName, Job_Title = jobTitle,
                                             Department = department,
                                             TelePhone_Number = telephoneNumber,
                                             Email_Address = emailAddress,
                                             Monthly_Credit_Amount = monthlyCreditAmount,
                                             Monthly_Spend = monthlySpend,
                                             Authorised_By = authorisedBy,
                                             Terms_And_Conditions = True)
        
        try:
            form.save()
            messages.success(request, 'Form Submitted Successfully')
        except:
            return messages.error(request, 'Check Your Inputs..')
    
    return render(request, 'user/corporate.html')


#Function to Get the Destination from the Selected Airport

def airportDest(request):
    if request.method == 'GET':
        fromCity = request.GET['dest']
        dest = dashboard.models.airportCity.objects.filter(fromCity = dashboard.models.airportRates.objects.get(id = fromCity))
        dest_list = list(dest.values())
        return JsonResponse({'dest': dest_list})
    


# Function to airport page
    
def airports(request):
    return render(request, 'user/Airports.html')


# Function to School Page

def schools(request):
    return render(request, 'user/schoolRuns.html')



# DRIVER PERSONAL DETAILS

def DriverForm(request):
    if 'username' in request.session:
        del request.session['username']
    form = MyDriver()
    if request.method == 'POST':
        data = MyDriver(request.POST, request.FILES)
        if data.is_valid():
            obj = data.save(commit=False)
            obj.driver_id = request.user
            obj.all_files_flag = True
            obj.save()
        else:
            messages.error(request, 'Something Went Wrong')
    context = {
        'form': form
    }
    return render(request, 'user/driverRegister.html', context)


#Driver Dash
def DriverDash(request):
    mes = ''
    data = get_object_or_404(DriverFiles, driver_id = request.user)
    if data.all_files_flag == True and data.accept_flag == True:
        mes = "You Are Selected"
    elif data.all_files_flag == True and data.accept_flag == False:
        mes = "Application is in Process..."
    else:
        return redirect('driverForm')

    return render(request, 'user/driverDash.html', {'data': mes})


def CusReply(request, pk, rep):
    com = ComplaintForm.objects.get(id = pk)
    which_reply = Reply.objects.get(id = rep)
    if request.method == 'POST':
        mes = request.POST[
            'reply-message'
        ]
        form = dashboard.models.ReplyCus(
                    com_id = com,
                    which_mes = which_reply,
                    reply_mes = mes,
                )
        form.save()
    context = {
        'com': com,
        'which': which_reply
    }
    return render(request, 'user/cusreply.html', context)