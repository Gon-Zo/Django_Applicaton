source /Users/bagjeong-gyu/workspace/python-market-app/api/venv/bin/activate
#cd /Users/bagjeong-gyu/workspace/python-market-app/api/venv/bin
#pip install --upgrade pip
#pip freeze > requirements.txt
#pip install -r requirements.txt
export SETTING=App.conf.dev
cd /Users/bagjeong-gyu/workspace/python-market-app/api/venv/bin/App
#python manage.py makemigrations
#python manage.py migrate
python3 manage.py runserver
