from django.db import models

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email_address = models.CharField(max_length=255)
    age = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"<User object: first_name: {self.first_name} last_name: {self.last_name} email_address: {self.email_address} age: {self.age} ({self.id})>"

# python manage.py makemigrations
# python manage.py migrate
# python manage.py shell
# from users_app.models import User
    # Query: Create 3 new users
    #     1 - User.objects.create(first_name = "Wijdan", last_name= "kuddah",email_address = "wij@email.com", age= 25) # create new user
    #     2 - User.objects.create(first_name = "phil", last_name= "krull",email_address = "phil@email.com",User.objects.create(first_name = "phil", last_name= "krull",email_address = "phil@email.com" ,age= 30) age= 30)
    #     3 - User.objects.create(first_name = "yara", last_name= "aljarbou",email_address = "yara@email.com", age= 25)
    # Query: Retrieve all the users
    #     User.objects.all()
    # Query: Retrieve the last user
    #     User.objects.last()
    # Query: Retrieve the first user
    #     User.objects.first()
    # Query: Change the user with id=3 so their last name is Pancakes.
    #     c = User.objects.get(id=3) # Updating an existing record
    #     c.last_name = "Pancakes"
    #     c.save()
    # Query: Delete the user with id=2 from the database
    #     c = User.objects.get(id=2) # Deleting an existing record
    #     c.delete() 
    # Query: Get all the users, sorted by their first name
    #     User.objects.all().order_by("first_name")
    # BONUS Query: Get all the users, sorted by their first name in descending order
    #     User.objects.all().order_by("-first_name")