from django.core.mail import send_mail

def SendMail(email, message, subject):
    send_mail(
        subject,
        message, 
        'eurocabs@noreply.com',
        [email],
        fail_silently=False
    )