from django.shortcuts import render, redirect
from .models import Show
def index(request):
    return redirect('/shows')

def showsList(request):
    context = {
        'all_shows': Show.objects.all(),
    }
    return render(request, 'index.html', context)

def showsNew(request):
    return render(request, 'show_form.html')

def showsCreate(request):
    newShow = Show.objects.create(title =request.POST['title'], network=request.POST['network'], description=request.POST['description'], release_date=request.POST['release_date'])
    return redirect(f'/shows/{newShow.id}')

def showsView(request, id):
    show = Show.objects.get(id=id)
    context = {
        'show': show,
    }
    return render(request, 'show_view.html', context)

def showsEdit(request, id):
    show = Show.objects.get(id=id)
    context = {
        'show': show,
    }
    return render(request, 'show_edit.html', context)

def showsUpdate(request, id):
    show = Show.objects.get(id=id)
    # print(request.POST)
    show.title = request.POST['title']
    show.network = request.POST['network']
    show.release_date = request.POST['release_date']
    show.description = request.POST['description']
    show.save()
    return redirect(f'/shows/{id}')

def showsDestroy(request, id):
    Show.objects.get(id=id).delete()
    return redirect('/shows')

