FROM python:3.7.4
RUN mkdir -p ./webapp/api
ADD ./venv ./webapp/api/venv
ADD __init__.py ./webapp/api/__init__.py
WORKDIR ./webapp
RUN /bin/bash -c  "source api/venv/bin/activate"
WORKDIR api/venv/bin
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
ENV SETTING=App.conf.dev
WORKDIR App
RUN python manage.py makemigrations
RUN python manage.py migrate
ENTRYPOINT ["python3" , "manage.py" , "runserver" , "0.0.0.0:8000"]
