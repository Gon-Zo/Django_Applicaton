import {combineReducers} from 'redux';
import isLogin from "./user/login";

const rootReducer = combineReducers({
    isLogin,
});

export default rootReducer;
