# Response Message py

LOGIN_FAIL = {"detail": "Login Fail"}
OBJECT_IS_NONE = {"detail": "OBJECT_IS_NONE"}
USER_SUCCESS = {'message': 'USER_SUCCESS'}
STORE_SUCCESS = {"detail": "STORE_SUCCESS"}
STORE_FAIL = {"detail": "STORE_FAIL"}
ITEM_SUCCESS = {"detail": "ITEM_SUCCESS"}
ITEM_FAIL = {"detail": "ITEM_FAIL"}
REVIEW_SUCCESS = {"detail": "REVIEW_SUCCESS"}
REVIEW_FAIL = {"detail": "REVIEW_FAIL"}


def EXCEPTION_DETAIL(e):
    return {"detail": str(e)}


def RESULT_LIST(data):
    return {'message': 'None', 'result': data}


def LOGIN_SUCCESS(jwt):
    return {
        'message': 'LOGIN_SUCCESS',
        'result': jwt
    }



