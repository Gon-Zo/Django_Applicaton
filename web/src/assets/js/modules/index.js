import {combineReducers} from 'redux';
import userReducer from "./user";
import productReducer from './reducer/product'

const rootReducer = combineReducers({
    userReducer , productReducer
});

export default rootReducer;
