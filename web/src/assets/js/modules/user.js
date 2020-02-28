const User = 'user/login';
const LOGOUT = 'user/logout'
const PAGELIST = 'user/pageList'
const SETUSER = 'user/setUser'

export const onLogin = () => ({type: User});
export const onLogout = () => ({type: LOGOUT});
export const onUser = (data) => ({type: PAGELIST, data: data});
export const setUser = (data) => ({type: SETUSER, data: data})
// const loginFlag = false;

const user = {
    isLogin: false,
    clickPage: 1,
    data: [],
    user: {}
}

const appUser = (state = user, action) => {
    switch (action.type) {
        case User:
            state.isLogin = true;
            break;
        case LOGOUT:
            state.isLogin = false;
        case PAGELIST:
            state.data = action.data
            break;
        case SETUSER:
            state.user = action.data
            break;
    }
    return state;
};

export default appUser
