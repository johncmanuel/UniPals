from django.db import models
from django.contrib.auth.models import User


CONTENT_TYPES= ( ('TXT', "TEXT"), ('VID', "TEXT"),
('LNK', "LINK"),
('IMG', "IMAGE") )

MBTI_TYPES = (
    ('ISTJ', 'ISTJ'),
    ('ISTP', 'ISTP'),
    ('ISFJ', 'ISFJ'),
    ('ISFP', 'ISFP'),
    ('INTJ', 'INTJ'),
    ('INTP', 'INTP'),
    ('INFJ', 'INFJ'),
    ('INFP', 'INFP'),
    ('ESTJ', 'ESTJ'),
    ('ESTP', 'ESTP'),
    ('ESFJ', 'ESFJ'),
    ('ESFP', 'ESFP'),
    ('ENTJ', 'ENTJ'),
    ('ENTP', 'ENTP'),
    ('ENFJ', 'ENFJ'),
    ('ENFP', 'ENFP')
)

# # Create y''our models here.
# class User(models.Model):
#     username = models.CharField(max_length=254, unique=True)
#     name = models.CharField(max_length=254)
#     email = models.EmailField(max_length=254, unique=True) 
#     password = models.CharField(max_length=254)
#     createdAt = models.DateTimeField(auto_now_add=True)

#     def __str__ (self):
#         return self.username


class Message(models.Model):
    sender = models.ForeignKey(User, related_name='sender', null=True, on_delete=models.SET_NULL)
    recipient = models.ForeignKey(User, related_name='recipient',  null=True, on_delete=models.SET_NULL)
    contentType = models.CharField(max_length=10,choices=CONTENT_TYPES, default="TXT")
    content = models.CharField(max_length=254)
    sentAt = models.DateTimeField(auto_now_add=True)

    def __str__ (self):
        return f"{self.sender} to {self.recipient} : {self.content}"


class Post(models.Model):
    author = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    contentType = models.CharField(max_length=10, choices=CONTENT_TYPES, default="TXT")
    content = models.CharField(max_length=254)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__ (self):
        return f"{self.author} : {self.content}"

class ContinuousMBTI(models.Model):
    
    extrovert = models.IntegerField(default=0)
    introvert = models.IntegerField(default=0)

    sensor = models.IntegerField(default=0)
    intuitive = models.IntegerField(default=0)

    thinker = models.IntegerField(default=0)
    feeler = models.IntegerField(default=0)

    judger = models.IntegerField(default=0)
    perceiver = models.IntegerField(default=0)

    def __str__(self):
        return f"E/I: {self.extrovert}/{self.introvert} | S/I: {self.sensor}/{self.intuitive} | T/F: {self.thinker}/{self.feeler} | J/P: {self.judger}/{self.perceiver}"

class Profile(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    discreteMBTI = models.CharField(max_length=4, choices=MBTI_TYPES, default="")
    continousMBTI = models.ForeignKey(ContinuousMBTI, null=True, on_delete=models.SET_NULL)
    friends = models.ManyToManyField(User, related_name='profile')

    def __str__(self):
        return f"{self.user} | {self.discreteMBTI}"






# Form model

