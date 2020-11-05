from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=255)
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __repr__(self):
        return f'title:{self.title}, desc:{self.desc}, number of authors:{self.authors.count()}'

class Author(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    notes = models.TextField()
    books = models.ManyToManyField(Book, related_name="authors")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __repr__(self):
        return f'first_name:{self.first_name},last_name:{self.last_name}, notes:{self.notes} , number of books:{self.books.count()}'

# python manage.py makemigrations
# python manage.py migrate
# from books_authors_app.models import Book, Author
# Query: Create 5 books with the following names: C Sharp, Java, Python, PHP, Ruby
    # Book.objects.create(title="C Sharp", desc="c sharp language book")
    # Book.objects.create(title="Java", desc="java language book")
    # Book.objects.create(title="Python", desc="python language book")
    # Book.objects.create(title="PHP", desc="php language book")
    # Book.objects.create(title="Ruby", desc="ruby language book")
# Query: Create 5 different authors: Jane Austen, Emily Dickinson, Fyodor Dostoevsky, William Shakespeare, Lau Tzu
    # Author.objects.create(first_name="Jane", last_name="Austen")
    # Author.objects.create(first_name="Emily", last_name="Dickinson")
    # Author.objects.create(first_name="Fyodor", last_name="Dostoevsky")
    # Author.objects.create(first_name="William", last_name="Shakespeare")
    # Author.objects.create(first_name="Lau", last_name="Tzu")
# Query: Change the name of the C Sharp book to C#
    # c = Book.objects.get(title="C Sharp")
    # c.title = "C#"
    # c.save()
# Query: Change the first name of the 4th author to Bill
    # c = Author.objects.all()[3]
    # c.first_name="Bill"
    # c.save()
# Query: Assign the first author to the first 2 books	
    # the_author = Author.objects.first()	# retrieve an instance of a auther
    # the_author.books.add(Book.objects.all()[0])
    # the_author.books.add(Book.objects.all()[1])
    # the_author.books.all()
# Query: Assign the second author to the first 3 books	
    # the_author = Author.objects.all()[1]
    # the_author.books.add(Book.objects.all()[0])
    # the_author.books.add(Book.objects.all()[1])
    # the_author.books.add(Book.objects.all()[2])
    # the_author.books.all()
# Query: Assign the third author to the first 4 books	
    # the_author = Author.objects.all()[2]
    # the_author.books.add(Book.objects.all()[0])
    # the_author.books.add(Book.objects.all()[1])
    # the_author.books.add(Book.objects.all()[2])
    # the_author.books.add(Book.objects.all()[3])
    # the_author.books.all()
# Query: Assign the fourth author to the first 5 books (or in other words, all the books)	
    # the_author = Author.objects.all()[3]
    # the_author.books.add(Book.objects.all()[0])
    # the_author.books.add(Book.objects.all()[1])
    # the_author.books.add(Book.objects.all()[2])
    # the_author.books.add(Book.objects.all()[3])
    # the_author.books.add(Book.objects.all()[4])
    # the_author.books.all()
# Query: Retrieve all the authors for the 3rd book	
    # the_book = Book.objects.all()[2]
    # the_book.authors.all()
# Query: Remove the first author of the 3rd book	
    # the_book.authors.remove(the_book.authors.first())
# Query: Add the 5th author as one of the authors of the 2nd book	
    # the_book = Book.objects.all()[1]
    # the_book.authors.add(Author.objects.all()[4])
    # the_book.authors.all()
# Query: Find all the books that the 3rd author is part of	
    # the_author = Author.objects.all()[2]
    # the_author.books.all()
# Query: Find all the authors that contributed to the 5th book
    # the_book = Book.objects.all()[4]
    # the_book.authors.all()