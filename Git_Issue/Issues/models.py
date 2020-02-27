from django.db import models


class Categories(models.Model):
    name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name
    
    
class Items(models.Model):
    type_of = models.ForeignKey(Categories, on_delete= models.SET_NULL, null=True)
    description = models.CharField(max_length=300)
    
    
    def __str__(self):
        return str(self.type_of )+ " " +str(self.description)