from django.shortcuts import render, redirect

x=0
y=0
w=0
h=0

def imaging(request):
    if request.method == 'POST':
        x = request.POST.get('X')
        y = request.POST.get('Y')
        w = request.POST.get('Width')
        h = request.POST.get('Height')
        return render(request,'upply.html',{})
    return render(request,'base.html',{})


# def upply(request):
#     context={
#         'x':x,
#         'y':y,
#         'w':w,
#         'h':h,
#     }
#     print(x)
#     return render(request,'upply.html',context)
