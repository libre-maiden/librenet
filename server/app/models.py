from django.db import models

class Posts(models.Model):
    title = models.CharField("Title", max_length=200)
    text = models.TextField("Text", max_length=5000)
    date = models.DateField("Date", auto_now_add=True)

    def __str__(self):
        return self.title