# Exception

detail_success = "SUCCESS"

detail_fall = "FALL"

login_success = "LOGIN_SUCCESS"

login_fall = "LOGIN_FALL"


def set_msg_text(detail_msg, msg_comment):
    return {'DETAIL': detail_msg, "Msg": msg_comment}


def get_login_success():
    return set_msg_text(detail_success, login_success)


def get_login_fall():
    return set_msg_text(detail_fall, login_fall)
