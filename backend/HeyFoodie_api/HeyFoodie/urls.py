from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListCategory.as_view()),
    path('<int:pk>/', views.DetailCategory.as_view()),
]