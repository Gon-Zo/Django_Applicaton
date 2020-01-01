import React, {useCallback} from 'react'
import {useSelector, useDispatch} from "react-redux";
import Login from "../view/Login";

export default () => {

    const users = useSelector(state => state.users, []);

    const dispatch = useDispatch();

    const isSuccess = useCallback(
        () => dispatch({type: "user/LOGIN_SUCCESS"}),
        [dispatch]
    );

    const isFall = useCallback(() => dispatch({type: "user/LOGIN_FALL"})
        , [dispatch]);

    return (
        <Login onSuccess={isSuccess} onFall={isFall} userYn={users}/>
    );

}
