from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def posttest(request):
    keys = request.POST
    username =  keys.get("name","")
    password = keys.get("password", "")

    if username == "Jimmy" and password == "Hendrix":
        return HttpResponse("Cool")
    else:
        return HttpResponse("Bad User Name")

