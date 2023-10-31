from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


app_name = 'cropping'

urlpatterns = [
    path('',views.imaging,name='image'),
    # path('upply',views.upply,name='upply'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
