FROM python:3.7.4
RUN mkdir ./webapp
ADD ./api ./webapp/api
WORKDIR ./webapp
RUN /bin/bash -c  "source api/venv/bin/activate"
WORKDIR api/venv/bin
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
ENV SETTING=App.conf.dev
WORKDIR App
RUN python manage.py makemigrations
RUN python manage.py migrate
ENTRYPOINT ["python3" , "manage.py" , "runserver"]
