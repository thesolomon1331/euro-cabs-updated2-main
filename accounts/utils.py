import pyotp
from datetime import datetime, timedelta
from django.core.mail import send_mail


    
def Send_Mail(email, subject, message):
    send_mail(
        subject, 
        message,
        "eurocabsdemo@gmail.com",
        [email],
        fail_silently=False,
    )

   

Subject = "Email Verification"     



def SendOtp(request, mails):
    totp = pyotp.TOTP(pyotp.random_base32(), interval = 60)
    otp = totp.now()

    request.session['otp_secret_key'] = totp.secret
    valid_date = datetime.now() + timedelta(minutes=1)
    request.session['otp_valid_date'] = str(valid_date)


    message = f"Your OTP is: {otp} \n \nThe OTP will be valid for 1minute\n\nEuroCabs.uk"

    Send_Mail(mails, Subject, message)


    

