from django.contrib import admin
from django.urls import path, include, re_path, url
from django.views.generic import TemplateView
from articles.api import urls as api_urls

urlpatterns = [
    # path('api-auth/', include('rest_framework.urls')),
    # path('rest-auth/', include('rest_auth.urls')),
    # path('rest-auth/registration/', include('rest_auth.registration.urls')),
    # path('api/', include('articles.api.urls')),
    # path('admin/', admin.site.urls),
    # re_path(r'^.*', TemplateView.as_view(template_name='index.html')),


    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(api_urls)),
    url(r'^$', TemplateView.as_view(template_name='index.html')),
    url(r'^(?:.*)/?$', TemplateView.as_view(template_name='index.html')),
]
