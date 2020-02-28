import React, {useCallback} from "react";
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import AppLogin from "../views/AppLogin";

export default () => {

    const user = useSelector(state => state.appUser, []);

    const dispatch = useDispatch();

    const onLogin = useCallback(() => dispatch({type: 'user/login'}), [dispatch])
    const onLogout = useCallback(() => dispatch({type: 'user/logout'}), [dispatch])

    const checkLogin = (id, pwd) => {

        axios.post(`/login`, {id: id, pwd: pwd})
            .then((res) => {
                let token = res.data;
                localStorage.setItem("Token", token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                onLogin()
            })
            .catch((err) => {
                onLogout()
                console.log(err)
            })

    }

    return (
        <AppLogin checkLogin={checkLogin}/>
    )

}
