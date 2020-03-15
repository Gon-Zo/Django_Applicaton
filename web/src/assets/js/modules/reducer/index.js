import {combineReducers} from 'redux';
import userReducer from "./user";
import productReducer from './product'
import settingReducer from "./setting";

const rootReducer = combineReducers({
    userReducer , productReducer , settingReducer
});

export default rootReducer;
