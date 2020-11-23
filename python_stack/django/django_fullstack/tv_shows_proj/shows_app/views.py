from django.shortcuts import render, redirect
from django.contrib import messages
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
    errors = Show.objects.validator(request.POST, '')
    # if Show.objects.filter(title=request.POST['title']):
    #     errors["title"] = "Show name should be unique"
    if len(errors) > 0:
        # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
        for key, value in errors.items():
            messages.error(request, value)
        # redirect the user back to the form to fix the errors
        return redirect(f'/shows/new')
    else:
        # if the errors object is empty, that means there were no errors!
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
    errors = Show.objects.validator(request.POST, id)
    # if Show.objects.filter(title=request.POST['title']) and show.title != request.POST['title'] :
    #     errors["title"] = "Show name should be unique"
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect(f'/shows/{id}/edit')
    else:
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

