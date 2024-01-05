from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from . models import CustomUser, ExtendUser
from . utils import SendOtp
from datetime import datetime
import pyotp


# Create your views here.

# Fuction to Login the User Using Email and Password

def userLogin(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']

        user = authenticate(request, email = email, password = password)

        if user is not None:
            login(request, user)
            if request.user.is_superuser:
                return redirect('adminDashboard')
            else:
                return redirect('driverDash')
        else:
            messages.error(request, "Check Your Credentials...")
    return render(request, 'auth/login.html')

# Function to Logout the User

def userLogout(request):
    logout(request)
    return redirect('userLogin')

# def adminLogin(request):
#     return render(request, 'auth/adminlogin.html')

# Driver Register

def DriverRegister(request):
    print("Hello")
    if request.method == 'POST':
        email = request.POST['email']
        phone = request.POST['phone-number']
        phone_country_code = request.POST['phone-country-code']
        password = request.POST['password1']

        print("Hello Reached")

     
        data = CustomUser.objects.create_user(username=email, email=email, password=password, is_active = False)
   
         
        
        form = ExtendUser(phone_number = phone, id_user = data, phone_code = phone_country_code)
        form.save()
        request.session['username'] = email
        SendOtp(request, email)
        return redirect('otpVerification')
        # else:
            # messages.error(request, "Phone Number Should be Less than 15 digits")
        # except:
        #     messages.error(request, 'Email Already Exists')
    
       
       
    return render(request, 'user/DriverLogin.html')



# OTP Verification:

def OtpVerification(request):
    if request.method == 'POST':
        otp = request.POST['otp']
        username = request.session['username']
        try:
            otp_secret_key = request.session['otp_secret_key']
            otp_valid_date = request.session['otp_valid_date']
        except:
            messages.error(request, "OTP Already Used")
        try:
            if otp_secret_key and otp_valid_date is not None:
                valid_until = datetime.fromisoformat(otp_valid_date)


                if valid_until > datetime.now():
                    totp = pyotp.TOTP(otp_secret_key, interval=60)
                    if totp.verify(otp):
                        user = get_object_or_404(CustomUser, email = username)
                        user.is_active = True
                        user.save()
                        login(request, user)
                        try:
                            del request.session['otp_secret_key']
                            del request.session['otp_valid_date']
                        except:
                            pass

                        print("Success FUll Login Thank you")
                        return redirect('driverForm')
                    else:
                        messages.error(request, "OTP is Invalid...")
                else:
                    messages.error(request, "OTP Expired...")
            else:
                messages.error(request, "Something Went Wrong")
        except:
            pass
    return render(request, 'auth/otp.html')