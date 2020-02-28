# Design_Esthetics
Users will be able to create a Issues with type of tag.
# Prerequisites
You will need to install following request for the backend
``` asgiref==3.2.3
astroid==2.3.3
Django==3.0.3
django-cors-headers==3.2.1
djangorestframework==3.11.0
isort==4.3.21
lazy-object-proxy==1.4.3
mccabe==0.6.1
pkg-resources==0.0.0
pylint==2.4.4
pytz==2019.3
six==1.14.0
sqlparse==0.3.0
typed-ast==1.4.1
wrapt==1.11.2
```
# Installation
clone the repository.
``` https://github.com/akashdp9/Design_Esthetics.git```

Setting up your virtual enviroment.
``` python3 -m venv .venv```

Activating the virtual enviroment.
```source .env/bin/activate```

# DataBase

Used Default Django Database.

Before running server make sure all migrations done. To exucute all migration.

``` python3 manage.py migrate```,
```python3 manage.py makemigrations```
