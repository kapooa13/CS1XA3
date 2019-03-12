from django.urls import path
from . import views

# from . import views
# from <cd> import the module views
# to import the module views so that it can call the function written in views.py

urlpatterns = [
    path('', views.hello_world, name='helloapp-hello_world'),
]
