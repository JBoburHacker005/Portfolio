from django.contrib import admin
from .models import Category, Project, Skill, PageContent

admin.site.register(Category)
admin.site.register(Project)
admin.site.register(Skill)
admin.site.register(PageContent)
