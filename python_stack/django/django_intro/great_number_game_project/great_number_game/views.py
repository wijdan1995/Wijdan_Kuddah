from django.shortcuts import render, redirect
import random 	                # import the random module

def index(request):
    print(request.POST)
    context = {}
    # if 'guess' in request.session and request.POST:
    if request.POST:
        print(request.POST['guess'])
        print(request.session['number'])
        # request.session['guess'] = request.POST['guess'] 
        guess = request.POST['guess']
        if request.session['number'] < int(guess):
            context = {
                'result' : False,
                'text' : 'Too high!',
                'color' : 'red',
            }
        elif request.session['number'] > int(guess): =
            context = {
                'result' : False,
                'text' : 'Too low!',
                'color' : 'red',
            }
        elif request.session['number'] == int(guess):
            context = {
                'result' : True,
                'text' : f'{request.session["number"]} was the number!',
                'color' : 'green',
            }
    else:
        # request.session.setdefault('guess', None)
        request.session.setdefault('number', None)
        request.session['number'] = random.randint(1, 100) # random number between 1-100
    return render(request, "index.html", context)

def reset(request):
    request.session.delete()
    return redirect('/')