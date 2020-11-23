from django.db import models
from login_app.models import User

class Author(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(Author, related_name="books", on_delete = models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class ReviewManager(models.Manager):
    def validator(self, postData):
        errors = {}
        if len(postData["title"] ) < 1:
            errors["title"] = "Title is required"
        if len(postData["content"] ) < 1:
            errors["content"] = "Review is required"
        if postData["author_new"]:
            if len(postData["author_new"] ) < 2:
                errors["name"] = "Author name should be at least 2 characters"
        return errors

    def review_only_validator(self, postData):
        errors = {}
        if len(postData["content"] ) < 1:
            errors["content"] = "Review is required"
        return errors

class Review(models.Model):
    content = models.TextField()
    rating = models.IntegerField()
    book = models.ForeignKey(Book, related_name="reviews", on_delete = models.CASCADE)
    written_by = models.ForeignKey(User, related_name="posted_reviews", on_delete = models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = ReviewManager()
