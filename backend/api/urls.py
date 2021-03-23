from django.urls import path, include
from .views import UsersView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('users', UsersView, basename='user')


urlpatterns = [
    path('', include(router.urls))
]