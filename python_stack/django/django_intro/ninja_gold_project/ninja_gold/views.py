from django.shortcuts import render, redirect
import random 	                # import the random module
from time import gmtime, strftime
def index(request):
    if 'gold' not in request.session:
        request.session['gold'] = 0
        request.session['activities'] = []
    print(request.session['gold'], request.session['activities'])
    context = {
        'gold' : request.session['gold'],
        'activities' : request.session['activities'],
    }
    return render(request, 'index.html', context)

def process(request):
    if request.POST['action'] == 'farm':
        num = random.randint(10, 20)
        request.session['gold'] += num
        time = strftime("%Y-%m-%d %H:%M %p",gmtime())
        text = f"Earned {num} golds from the farm! ( {str(time)} )"
        request.session['activities'].append({'text':text, 'color':' green'})
    elif request.POST['action'] == 'cave':
        num = random.randint(5, 10)
        request.session['gold'] += num
        time = strftime("%Y-%m-%d %H:%M %p",gmtime())
        text = f"Earned {num} golds from the cave! ( {str(time)} )"
        request.session['activities'].append({'text':text, 'color':' green'})
    elif request.POST['action'] == 'house':
        num = random.randint(2, 5)
        request.session['gold'] += num
        time = strftime("%Y-%m-%d %H:%M %p",gmtime())
        text = f"Earned {num} golds from the house! ( {str(time)} )"
        request.session['activities'].append({'text':text, 'color':' green'})
    elif request.POST['action'] == 'casino':
        num = random.randint(-50, 50)
        request.session['gold'] += num
        time = strftime("%Y-%m-%d %H:%M %p",gmtime())
        if num > 0:
            text = f"Entered a casino and earned {num} golds... ( {str(time)} )"
            color = 'green'
        else:
            text = f"Entered a casino and lost {num} golds... Ouch .. ( {str(time)} )"
            color = 'red'
        request.session['activities'].append({'text':text, 'color':color})
    return redirect('/')

def reset(request):
    request.session.delete()
    return redirect('/')
