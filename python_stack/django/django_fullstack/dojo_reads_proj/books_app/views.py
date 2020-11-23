from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Book, Review, Author
from login_app.models import User

def index(request):
    if 'user_id' in request.session:
        context = {
            'all_books': Book.objects.all(),
            'reviews': Review.objects.all().order_by("-created_at")[:3],
            'user_id':request.session['user_id'],
            'user_name':request.session['user_name'],
        }
        return render(request, 'books_app/index.html', context)
    else:
        return redirect('login:root')

def new(request):
    context = {
    'all_authors': Author.objects.all(),
    'user_id':request.session['user_id'],
    }
    return render(request, 'books_app/book_create.html',context)

def create(request):
    if request.POST:
        errors = Review.objects.validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value, extra_tags='books')
            return redirect('books:new')
        else:
            if request.POST['author_new']:
                author = Author.objects.create(name=request.POST['author_new'])
            elif request.POST['author_select_id']:
                author = Author.objects.get(id=request.POST['author_select_id'])
            # create the Review
            user = User.objects.get(id=request.session['user_id'])
            book = Book.objects.create(title=request.POST['title'], author=author )
            Review.objects.create(content=request.POST['content'], rating=request.POST['rating'], book=book, written_by=user)
            return redirect('books:view', book_id=book.id)
    else:
        return redirect('books:new')

def view(request, book_id):
    book = Book.objects.get(id=book_id)
    context = {
    'book': book,
    'user_id':request.session['user_id'],
    }
    request.session['book_id'] = book.id
    return render(request, 'books_app/book_view.html',context)

def review(request, book_id):
    if request.POST:
        errors = Review.objects.review_only_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value, extra_tags='books')
            return redirect('books:view', book_id=book_id)
        else:
            # create the Review
            user = User.objects.get(id=request.session['user_id'])
            book = Book.objects.get(id=book_id)
            Review.objects.create(content=request.POST['content'], rating=request.POST['rating'], book=book, written_by=user)
            return redirect('books:view', book_id=book_id)
    else:
        return redirect('books:view', book_id=book_id)

def delete_review(request, review_id):
    if request.POST:
            review = Review.objects.get(id=review_id)
            review.delete()
            return redirect('books:view', book_id=request.session['book_id'])
    else:
        return redirect('books:view', book_id=request.session['book_id'])

def user_reviews(request, user_id):
    context = {
    'user': User.objects.get(id=user_id),
    'user_id':request.session['user_id'],
    }
    return render(request, 'books_app/user_view.html',context)
