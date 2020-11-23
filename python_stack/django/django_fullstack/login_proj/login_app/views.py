from django.shortcuts import render,redirect
import bcrypt
from django.contrib import messages
from .models import User
def index(request):
    return render(request, 'index.html')

def register(request):
    errors = User.objects.register_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value, extra_tags='register')
        return redirect('/')
    else:
        password = request.POST['password']
        pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()  # create the hash    
        logged_user = User.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], email=request.POST['email'], password=pw_hash)
        request.session['user_first_name'] = logged_user.first_name
        return redirect('/success')

def login(request):
    errors = User.objects.login_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value, extra_tags='login')
        return redirect('/')
    user = User.objects.filter(email=request.POST['email'])
    if user:
        logged_user = user[0] 
        if bcrypt.checkpw(request.POST['password'].encode(), logged_user.password.encode()):
            request.session['user_first_name'] = logged_user.first_name
            request.session['user_email'] = logged_user.email
            return redirect('/success')
        else:
            messages.error(request, "Email or Password not correct", extra_tags='login')
            return redirect('/')
    else:
        messages.error(request, "Email or Password not correct", extra_tags='login')
        return redirect('/')

def success(request):
    if 'user_email' in request.session:
        context = {
            "user_first_name": request.session['user_first_name'],
            "user_email":request.session['user_email']
        }
        messages.success(request, "Successfully registered (or logged in)!")
        return render(request, 'welcome.html', context)
    else:
        return redirect('/')

def logout(request):
    request.session.delete()
    return redirect('/')
