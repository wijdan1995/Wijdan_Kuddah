from django.db import models
from datetime import datetime
class ShowManager(models.Manager):
    def validator(self, postData, id):
        errors = {}
        # present = datetime.now().date()
        # if postData['release_date']:
        #     release_date = datetime.strptime(postData['release_date'], "%Y-%m-%d").date()
        # else:
        #     release_date =  None
        # print(postData)
        # add keys and values to errors dictionary for each invalid field
        print(self.filter(title=postData['title']))
        if len(postData['title']) < 2:
            errors["title"] = "Show name should be at least 2 characters"
        if id:
            if self.filter(title=postData['title']) and self.get(id=id).title != postData['title']:
                errors["title"] = "Show name should be unique"
        else:
            if self.filter(title=postData['title']):
                errors["title"] = "Show name should be unique"
        if len(postData['network']) < 3:
            errors["network"] = "Show network should be at least 3 characters"
        if postData['description']:
            if len(postData['description']) < 10:
                errors["description"] = "Show description should be at least 10 characters"
        if len(postData['release_date']) < 1 :
            errors["release_date"] = "Show release date required"
        elif datetime.strptime(postData['release_date'], "%Y-%m-%d").date() > datetime.now().date() :
            errors["release_date"] = "Show release date should be in the past"
        return errors
class Show(models.Model):
    title = models.CharField(max_length=255)
    network = models.CharField(max_length=255)
    description = models.TextField()
    release_date = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = ShowManager()

    def __repr__(self):
        return f'title:{self.title}, network:{self.network}, description:{self.description}, release_date:{self.release_date}'
