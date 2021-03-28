from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from .serializers import UserSerializer, MessageSerializer, PostSerializer, ProfileSerializer
from .models import Message, Post, Profile
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User

# Create your views here.
class UsersView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class MessagesView(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    queryset = Message.objects.all()

class PostsView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()

class ProfilesView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()


@api_view(['POST'])
def processForm(request):
    # Retrieve form data from request
    formData = request.data

    # Process form data with weights
    jsonResponse = {'Status': True, 'Data-Received': request.data}
    return Response(jsonResponse)

