import time


def __log_query__(obj):
    query = obj.query
    now = time.localtime()
    s = "%04d-%02d-%02d %02d:%02d:%02d" % (now.tm_year, now.tm_mon, now.tm_mday, now.tm_hour, now.tm_min, now.tm_sec)
    if query is None:
        print("[" + str(s) + "] QUERY [Zzz.App.server] ERROR QUERY IS NONE")
    else:
        print("[" + str(s) + "] " + "QUERY [Zzz.App.server] " + str(obj.query))
