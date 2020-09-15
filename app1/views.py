from datetime import datetime
from django.shortcuts import render


def hello_world(request):
    return render(request, 'hello_world.html', {
        'current_time': str(datetime.now()),
    })

#當url匹配時接收到HTTP request
def index(request):
    return render(request,'index.html')
