from django.shortcuts import render,redirect
import bcrypt
from django.contrib import messages
from .models import User
def index(request):
    if 'user_id' in request.session:
        return redirect('books:root')
    else:
        return render(request, 'login_app/index.html')

def register(request):
    if request.method == "POST":
        errors = User.objects.register_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value, extra_tags='register')
            return redirect('login:root')
        else:
            password = request.POST['password']
            pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()  # create the hash    
            logged_user = User.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], email=request.POST['email'], password=pw_hash)
            request.session['user_first_name'] = logged_user.first_name
            request.session['user_last_name'] = logged_user.last_name
            request.session['user_id'] = logged_user.id
            return redirect('login:success')
    else:
        return redirect('login:root')

def login(request):
    if request.method == "POST":
        errors = User.objects.login_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value, extra_tags='login')
            return redirect('login:root')
        user = User.objects.filter(email=request.POST['email'])
        if user:
            logged_user = user[0] 
            if bcrypt.checkpw(request.POST['password'].encode(), logged_user.password.encode()):
                request.session['user_first_name'] = logged_user.first_name
                request.session['user_last_name'] = logged_user.last_name
                request.session['user_id'] = logged_user.id
                return redirect('login:success')
            else:
                messages.error(request, "Email or Password not correct", extra_tags='login')
                return redirect('login:root')
        else:
            messages.error(request, "Email or Password not correct", extra_tags='login')
            return redirect('login:root')
    else:
        return redirect('login:root')

def success(request):
    if 'user_id' in request.session:
        messages.success(request, "Successfully registered (or logged in)!", extra_tags='logged')
        return redirect('books:root')
    else:
        return redirect('login:root')

def logout(request):
    request.session.flush()
    return redirect('login:root')
