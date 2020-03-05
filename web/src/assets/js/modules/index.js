import {combineReducers} from 'redux';
import userReducer from "./reducer/user";
import productReducer from './reducer/product'

const rootReducer = combineReducers({
    userReducer , productReducer
});

export default rootReducer;
