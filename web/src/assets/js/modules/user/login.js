const LOGIN = 'user/login';
const LOGOUT = 'user/logout'

export const onLogin = () => ({type: LOGIN});
export const onLogout = () => ({type: LOGOUT});

// const loginFlag = false;

const user = {
    isLogin: false
}

const appUser = (state = user, action) => {
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

export default appUser
