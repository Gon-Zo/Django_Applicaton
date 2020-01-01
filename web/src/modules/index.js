import { combineReducers } from 'redux';
import counter from './ex/counter';
import users from './user'

const rootReducer = combineReducers({
    counter , users
});

export default rootReducer;
