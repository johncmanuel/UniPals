from rest_framework import serializers
from .models import Message, Post, Profile, ContinuousMBTI
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

        extra_kwargs = {'password':{
            'write_only':True,
            'required':True
        }}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class ContinuousMBTISerializer(serializers.ModelSerializer):
    class Meta:
        model = ContinuousMBTI
        fields = '__all__'


class MessageSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Message
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = '__all__'

    
    