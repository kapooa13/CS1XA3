from django.urls import path
from . import views

urlpatterns = [
#   path('', views.hello , name='helloapp-hello'),
    path("post/", views.posttest, name = "jimmyapp-posttest"),
]
