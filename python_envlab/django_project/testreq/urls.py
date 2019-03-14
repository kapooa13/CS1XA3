from django.urls import path
from . import views

# from . relative to current dir : ie., test req

urlpatterns = [
    path("get/" , views.gettest , name = "testreq-gettest"),

# when routing stuff in django, always put a / at the end

    path("post/" , views.posttest , name = "testreq-posttest"),

    path("", views.hello , name = "testreq-hello"),
# the path in this folder will be relative to the django_project folder
# cause its redirected from there

# from here, we woukd want to send it to view, so import views module
]
