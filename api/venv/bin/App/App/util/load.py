# Server start to Banner Load
class StartApplication():
    with open('App/conf/file/banner.txt', mode='r', encoding='utf-8') as banner:
        banner = banner.read()
        print(banner)
    pass
