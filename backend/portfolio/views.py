from rest_framework import viewsets
from .models import Category, Skill, PageContent
from .serializers import CategorySerializer, SkillSerializer, PageContentSerializer

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class SkillViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class PageContentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = PageContent.objects.all()
    serializer_class = PageContentSerializer
    lookup_field = 'page_name'
