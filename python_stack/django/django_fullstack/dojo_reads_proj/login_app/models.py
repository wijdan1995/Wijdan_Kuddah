from django.db import models
import re	# the regex module

class UserManager(models.Manager):
    def register_validator(self, postData):
        errors = {}
        EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")
        if len(postData["name"]) < 5:
            errors["name"] = "Name should be at least 5 characters"
        elif not postData["name"].replace(" ", "").isalpha():
            errors["name"] = "Name should be letters only"
        if len(postData["alias"]) < 2:
            errors["alias"] = "Alias should be at least 2 characters"
        if len(postData["password"]) < 8:
            errors["password"] = "Password should be at least 8 characters"
        if postData["password"] != postData["confirm_pw"]:
            errors["confirm_pw"] = "Password and confirm password does not match"
        if self.filter(email=postData["email"]):
            errors["email"] = "Email is already registered"
        if not EMAIL_REGEX.match(postData["email"]):
            errors["email"] = "Invalid email"
        return errors

    def login_validator(self, postData):
        errors = {}
        EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")
        if len(postData["password"]) < 8:
            errors["password"] = "Password should be at least 8 characters"
        if not EMAIL_REGEX.match(postData["email"]):
            errors["email"] = "Invalid email"
        return errors

class User(models.Model):
    name = models.CharField(max_length=45)
    alias = models.CharField(max_length=45)
    email = models.CharField(max_length=45)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    objects = UserManager()
