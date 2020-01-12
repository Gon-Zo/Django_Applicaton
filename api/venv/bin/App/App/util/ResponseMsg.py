# Response Message py

SIGN_UP_SUCCESS = {'message': 'SING_UP_SUCCESS'}
USER_IS_NONE = {"detail": "USER_IS_NONE"}
LOGIN_FAIL = {"detail": "Login Fail"}
USER_DELETE_SUCCESS = {'message': 'USER_DELETE_SUCCESS'}
SEQ_IS_NONE = {"detail": "SEQ_IS_NONE"}
STORE_SUCCESS = {"detail": "STORE_SUCCESS"}
STORE_FAIL = {"detail": "STORE_FAIL"}
STORE_IS_NONE = {"detail": "STORE_IS_NONE"}
ITEM_SUCCESS = {"detail": "ITEM_SUCCESS"}
ITEM_FAIL = {"detail": "ITEM_FAIL"}


def EXCEPTION_DETAIL(e):
    return {"detail": str(e)}


def RESULT_LIST(data):
    return {'message': 'None', 'result': data}


def LOGIN_SUCCESS(jwt):
    return {
        'message': 'LOGIN_SUCCESS',
        'result': jwt
    }
