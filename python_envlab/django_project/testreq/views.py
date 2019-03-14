from django.shortcuts import render
from django.http import HttpResponse

def hello(request):
    return HttpResponse("Hellooo")

# views take a httpRequest object and return a httpResponse object
#                                                initialised using httpResponse(body)

def gettest(request):
    keys = request.GET
    name =  keys.get("name","")
    age = keys.get("age", "")

    return HttpResponse("Hello " + name + " your " + age + " old")

def posttest(request):
    keys = request.POST
    name =  keys.get("name","")
    age = keys.get("age", "")

    return HttpResponse("Hello " + name + " your " + age + " old")

# Create your views here.
