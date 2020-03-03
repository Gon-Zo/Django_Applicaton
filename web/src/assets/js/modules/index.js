import {combineReducers} from 'redux';
import appUser from "./user";
import productReducer from './product'

const rootReducer = combineReducers({
    appUser, productReducer
});

export default rootReducer;
