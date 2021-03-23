from django.shortcuts import render
from rest_framework import generics
from .serializers import UserSerializer
from .models import User
from rest_framework import viewsets

# Create your views here.
class UsersView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

