from django.db import models

class Category(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    icon = models.CharField(max_length=50, help_text="Lucide icon name, e.g., 'Laptop'")
    gradient = models.CharField(max_length=100, default="from-blue-500 to-indigo-500")

    def __str__(self):
        return self.title

class Project(models.Model):
    category = models.ForeignKey(Category, related_name='projects', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    url = models.URLField()

    def __str__(self):
        return f"{self.name} - {self.category.title}"

class Skill(models.Model):
    name = models.CharField(max_length=50)
    icon = models.CharField(max_length=50, help_text="Lucide icon name, e.g., 'Terminal'")

    def __str__(self):
        return self.name

class PageContent(models.Model):
    page_name = models.CharField(max_length=50, unique=True, help_text="e.g., 'about_intro', 'hero_subtitle'")
    content = models.TextField()

    def __str__(self):
        return self.page_name
