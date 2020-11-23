from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Book
from login_app.models import User

def index(request):
    if 'user_id' in request.session:
        context = {
            'all_books': Book.objects.all(),
            'user_id':request.session['user_id'],
            'user_first_name':request.session['user_first_name'],
            'user_last_name':request.session['user_last_name'],
            'user_liked_books': User.objects.get(id=request.session['user_id']).liked_books.all()
        }
        return render(request, 'books_app/index.html', context)
    else:
        return redirect('login:root')

def user_fav(request):
    if 'user_id' in request.session:
        context = {
            'user_id':request.session['user_id'],
            'user_first_name':request.session['user_first_name'],
            'user_last_name':request.session['user_last_name'],
            'user_liked_books': User.objects.get(id=request.session['user_id']).liked_books.all()
        }
        return render(request, 'books_app/user_fav.html', context)
    else:
        return redirect('login:root')

def create(request):
    if request.method == "POST":
        errors = Book.objects.validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value, extra_tags='books')
            return redirect('books:root')
        else:
            user = User.objects.get(id=request.session['user_id'])
            book = Book.objects.create(title=request.POST['title'], desc=request.POST['desc'], uploaded_by=user )
            user.liked_books.add(book)
            return redirect('books:root')
    else:
        return redirect('books:root')

def like(request, book_id):
    if request.method == "POST":
        user = User.objects.get(id=request.session['user_id'])
        book = Book.objects.get(id=book_id)
        user.liked_books.add(book)
        if request.POST['which_form'] == 'books':
            return redirect('books:root')
        elif request.POST['which_form'] == 'book_view':
            return redirect('books:view', book_id=book_id)
    else:
        return redirect('books:root')

def remove_like(request, book_id):
    if request.method == "POST":
        user = User.objects.get(id=request.session['user_id'])
        book = Book.objects.get(id=book_id)
        user.liked_books.remove(book)
        return redirect('books:view', book_id=book_id)
    else:
        return redirect('books:root')

def view(request, book_id):
    context = {
        'book': Book.objects.get(id=book_id),
        'user_id':request.session['user_id'],
        'user_first_name':request.session['user_first_name'],
        'user_last_name':request.session['user_last_name'],
        'user_liked_books': User.objects.get(id=request.session['user_id']).liked_books.all()
    }
    return render(request, 'books_app/book_view.html', context)

def update(request, book_id):
    if request.POST:
        errors = Book.objects.validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value, extra_tags='books')
            return redirect('books:view', book_id=book_id)
        else:
            book = Book.objects.get(id=book_id)
            book.title = request.POST['title']
            book.desc = request.POST['desc']
            book.save()
            return redirect('books:view', book_id=book_id)
    else:
        return redirect('books:view', book_id=book_id)

def delete(request, book_id):
    if request.method == "POST":
        book = Book.objects.get(id=book_id)
        book.delete()
        return redirect('books:root')
    else:
        return redirect('books:view', book_id=book_id)
