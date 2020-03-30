import axios from "axios";

const User = 'user/login';
const LOGOUT = 'user/logout'
const PAGELIST = 'user/pageList'
const SETUSER = 'user/setUser'

export const onLogin = () => ({type: User});
export const onLogout = () => ({type: LOGOUT});
export const onUser = (data) => ({type: PAGELIST, data: data});
export const setUser = (data) => ({type: SETUSER, data: data});
export const clickPage = (data) => ({type: 'user/clickPage', data: data});
export const isOpen = () => ({type: 'user/isOpen'});
export const changeTheme = ()=>({type:'user/changeTheme'})


const initUser = {
    isLogin: localStorage.getItem("Token") ? true : false,
    isTheme: false,
    page: 1,
    numPage: 10,
    users: [],
    user: {},
    isOpen: false,
}

const userReducer = (state = initUser, action) => {
    switch (action.type) {
        case User:
            state.isLogin = true;
            break;
        case LOGOUT:
            state.isLogin = false;
            break;
        case PAGELIST:
            state.users = action.data;
            break;
        case SETUSER:
            state.user = action.data;
            break;
        case 'user/changeTheme':
            state.isTheme = !state.isTheme
            break;
        case "user/clickPage":
            state.page = action.data;
            break;
        case "user/isOpen":
            state.isOpen = !state.isOpen;
            break;
    }
    return state;
};

export default userReducer
