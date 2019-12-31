import json


def __get_database_conf__():
    sk = None

    # Open json file to key.json
    with open('App/conf/json/key.json', mode='rt', encoding='utf-8') as key:
        key = json.load(key)
        sk = key.get('dev').get('SECRET_KEY')

    # Open json file to conf.json
    with open('App/conf/json/conf.json', mode='rt', encoding='utf-8') as file:
        data = json.load(file)
        dev = data.get('dev')
        secret_key = dev.get('SECRET_KEY')
        if sk == secret_key:
            db_conf = dev.get('DATABASES')
            return db_conf
        else:
            return None
