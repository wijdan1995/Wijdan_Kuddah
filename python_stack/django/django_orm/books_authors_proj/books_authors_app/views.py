from django.shortcuts import render,redirect
from .models import Book, Author
# Create your views here.
def index(request):
    context = {
        'all_books': Book.objects.all(),
    }
    return render(request, 'index.html', context)
def authors(request):
    context = {
        'all_authors': Author.objects.all()
    }
    return render(request, 'authors.html', context)
def gets(request, model, id):
    if model == 'books':
        book = Book.objects.get(id =id)
        context = {
            'book': book,
            'all_authors': Author.objects.all()
        }
        template = 'book.html'
    if model == 'authors':
        author = Author.objects.get(id =id)
        context = {
            'author': author,
            'all_books': Book.objects.all(),
        }
        template = 'author.html'
    return render(request, template, context)

def newBook(request):
    Book.objects.create(title =request.POST['title'], desc=request.POST['desc'])
    return redirect('/')

def newAuthor(request):
    Author.objects.create(first_name =request.POST['first_name'],last_name =request.POST['last_name'], notes=request.POST['notes'])
    return redirect('/authors')

def process(request, model, id):
    if model == 'books':
        book = Book.objects.get(id =id)
        author = Author.objects.get(id =request.POST['author'])
        book.authors.add(author)
    if model == 'authors':
        author = Author.objects.get(id =id)
        book = Book.objects.getid =request.POST['book']
        author.books.add(book)
    return redirect(f'/{model}/{id}')