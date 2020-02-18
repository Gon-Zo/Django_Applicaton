import {combineReducers} from 'redux';
import appUser from "./user/login";

const rootReducer = combineReducers({
    appUser,
});

export default rootReducer;
