const LOGIN = 'user/login';
const LOGOUT = 'user/logout'
const PAGELIST = 'user/pageList'

export const onLogin = () => ({type: LOGIN});
export const onLogout = () => ({type: LOGOUT});
export const onUser = (data) => ({type: PAGELIST , data : data});

// const loginFlag = false;

const user = {
    isLogin: false,
    clickPage: 1,
    data: []
}

const appUser = (state = user, action) => {
    switch (action.type) {
        case LOGIN:
            state.isLogin = true;
            break;
        case LOGOUT:
            state.isLogin = false;
        case PAGELIST:
            state.data = action.data
            break;
    }
    return state;
};

export default appUser
