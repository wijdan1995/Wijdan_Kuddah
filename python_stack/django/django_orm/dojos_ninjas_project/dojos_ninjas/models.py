from django.db import models

class Dojo(models.Model):
    name = models.CharField(max_length=255)
    desc = models.TextField()
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=2) 
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)



    def __repr__(self):
        return f' name:{self.name}, city:{self.city}, state:{self.state} , desc:{self.desc}'

class Ninja(models.Model):

    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    state = models.CharField(max_length=2) 
    dojo=models.ForeignKey(Dojo, related_name="ninjas", on_delete = models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)



    def __repr__(self):
        return f'first name:{self.first_name},last name:{self.last_name}, dojo:{self.dojo.name}'