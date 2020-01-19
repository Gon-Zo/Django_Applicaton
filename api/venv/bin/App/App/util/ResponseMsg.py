# Response Message py

LOGIN_FAIL = {"detail": "Login Fail"}
OBJECT_IS_NONE = {"detail": "OBJECT_IS_NONE"}
USER_SUCCESS = {'message': 'USER_SUCCESS'}
STORE_SUCCESS = {'message': "STORE_SUCCESS"}
STORE_FAIL = {'message': "STORE_FAIL"}
ITEM_SUCCESS = {'message': "ITEM_SUCCESS"}
ITEM_FAIL = {'message': "ITEM_FAIL"}
REVIEW_SUCCESS = {'message': "REVIEW_SUCCESS"}
REVIEW_FAIL = {'message': "REVIEW_FAIL"}
BASKET_SUCCESS = {'message': "BASKET_SUCCESS"}
BASKET_FAIL = {'message': "BASKET_FAIL"}
CATEGORY_ITEM_FAIL = {'message': "CATEGORY_ITEM_FAIL"}
CATEGORY_ITEM_SUCCESS = {'message': "CATEGORY_ITEM_SUCCESS"}


# 예외처리
def EXCEPTION_DETAIL(e):
    return {"detail": str(e)}


# 리스트
def RESULT_LIST(data):
    return {'message': 'None', 'result': data}


# 로그인
def LOGIN_SUCCESS(jwt):
    return {
        'message': 'LOGIN_SUCCESS',
        'result': jwt
    }
