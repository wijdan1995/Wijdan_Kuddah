from django.shortcuts import render,redirect
from .models import Ninja, Dojo
def index(request):
    context = {"dojos": Dojo.objects.all(), "ninjas":Ninja.objects.all()}
    return render(request, "index.html", context)

def process(request):
    print(request.POST)
    if request.POST['action'] == 'dojo':
        Dojo.objects.create(name = request.POST['name'], desc= request.POST['desc'], city = request.POST['city'], state= request.POST['state'])
    if request.POST['action'] == 'ninja':
        Ninja.objects.create(first_name = request.POST['first_name'], last_name= request.POST['last_name'], state= request.POST['state'], dojo= Dojo.objects.get(id=request.POST['dojo']))
    return redirect('/')
    

def delete(request, id):
    dojo_to_delete = Dojo.objects.get(id=id)
    dojo_to_delete.delete()
    return redirect('/')

