import json


def __open_key__():
    # Open json file to key.json
    with open('App/conf/json/key.json', mode='rt', encoding='utf-8') as key:
        key = json.load(key)
        return key.get('dev').get('SECRET_KEY')


def __get_db_conf__():
    # Open json file to conf.json
    with open('App/conf/json/conf.json', mode='rt', encoding='utf-8') as file:
        data = json.load(file)
        dev = data.get('dev')
        secret_key = dev.get('SECRET_KEY')
        sk = __open_key__()
        if sk == secret_key:
            db_conf = dev.get('DATABASES')
            return db_conf
        else:
            return None
