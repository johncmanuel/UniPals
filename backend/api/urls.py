from django.urls import path, include
from .views import UsersView, MessagesView, PostsView, ProfilesView, processForm
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('users', UsersView, basename='users')
router.register('users/<int:id>', UsersView, basename='user')
router.register('messages', MessagesView, basename='messages')
router.register('messages/<int:id>', MessagesView, basename='message')
router.register('posts', PostsView, basename='posts')
router.register('posts/<int:id>', PostsView, basename='post')
router.register('profiles', ProfilesView, basename='profiles')
router.register('profiles/<int:id>', ProfilesView, basename='profile')

urlpatterns = [
    path('', include(router.urls)),
    path('process-form/', processForm)
]