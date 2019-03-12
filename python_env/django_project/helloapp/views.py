from django.shortcuts import render

from django.http import HttpResponse

def hello_world(request):
    myhell="<html><body>Hello Worldddd</body></html>"
    return HttpResponse(myhell)
