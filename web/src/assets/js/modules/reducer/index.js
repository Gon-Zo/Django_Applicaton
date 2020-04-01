import {combineReducers} from 'redux';
import userReducer from "./user";
import productReducer from './product'
import settingReducer from "./setting";
import categoryReducer from "./category";

const rootReducer = combineReducers({
    userReducer , productReducer , settingReducer , categoryReducer
});

export default rootReducer;
