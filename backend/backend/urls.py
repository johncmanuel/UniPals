from django.contrib import admin
from django.urls import path, include, re_path
from .views import index
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('auth/', obtain_auth_token),

    #Ensure compatability with react
    # match the root
    re_path(r'^$', index),
    # match all other pages
    re_path(r'^(?:.*)/?$', index),

    

]