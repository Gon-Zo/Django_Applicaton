const LOGIN = 'user/login';
const LOGOUT = 'user/logout'

export const onLogin = () => ({type: LOGIN});
export const onLogout = () => ({type: LOGOUT});

const loginFlag = false;

const isLogin = (state = loginFlag, action) => {
    switch (action.type) {
        case LOGIN:
            state = true;
            break;
        case LOGOUT:
            state = false;
            break;
    }
    return state;
};

export default isLogin
