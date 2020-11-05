from django.shortcuts import render
from time import gmtime, strftime, localtime
from datetime import datetime

now = datetime.now()


def index(request):
    context = {
        "time": strftime("%H:%M %p", gmtime()),
        # "local": strftime("%H:%M %p", localtime()),
        "date": strftime("%b %d , %Y", gmtime()),
        # "now": now.strftime("%H:%M %p"),
    }
    return render(request,'index.html', context)
