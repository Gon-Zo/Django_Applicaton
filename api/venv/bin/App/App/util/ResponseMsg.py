# Response Message py

SIGN_UP_SUCCESS = {'message': 'SING_UP_SUCCESS'}
USER_IS_NONE = {"detail": "USER_IS_NONE"}
LOGIN_FAIL = {"detail": "Login Fail"}
USER_DELETE_SUCCESS = {'message': 'USER_DELETE_SUCCESS'}
SEQ_IS_NONE = {"detail": "SEQ_IS_NONE"}
USER_UPDATE_SUCCESS = {"detail": "USER_UPDATE_SUCCESS"}


def EXCEPTION_DETAIL(e):
    return {"detail": str(e)}


def RESULT_LIST(data):
    return {'message': 'None', 'result': data}


def LOGIN_SUCCESS(jwt):
    return {
        'message': 'LOGIN_SUCCESS',
        'result': jwt
    }
