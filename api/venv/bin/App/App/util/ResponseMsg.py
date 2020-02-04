# Response Message py

LOGIN_FAIL = {"detail": "Login Fail"}
OBJECT_IS_NONE = {"detail": "OBJECT_IS_NONE"}
USER_SUCCESS = {'message': 'USER_SUCCESS'}
STORE_SUCCESS = {'message': "STORE_SUCCESS"}
STORE_FAIL = {'detail': "STORE_FAIL"}
ITEM_SUCCESS = {'message': "ITEM_SUCCESS"}
ITEM_FAIL = {'detail': "ITEM_FAIL"}
REVIEW_SUCCESS = {'message': "REVIEW_SUCCESS"}
REVIEW_FAIL = {'detail': "REVIEW_FAIL"}
BASKET_SUCCESS = {'message': "BASKET_SUCCESS"}
BASKET_FAIL = {'detail': "BASKET_FAIL"}
CATEGORY_ITEM_FAIL = {'detail': "CATEGORY_ITEM_FAIL"}
CATEGORY_ITEM_SUCCESS = {'message': "CATEGORY_ITEM_SUCCESS"}
ADMIN_SUCCESS = {'message': "ADMIN_SUCCESS"}
ADMIN_FAIL = {'detail': "ADMIN_FAIL"}


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
