import React, {useCallback} from "react";
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import AppLogin from "../views/AppLogin";
import {UserDto} from "../dto/AppDto";

export default () => {

    const isLogin = useSelector(state => state.isLogin, []);
    const dispatch = useDispatch();

    const onLogin = useCallback(() => dispatch({type: 'user/login'}), [dispatch])
    const onLogout = useCallback(() => dispatch({type: 'user/logout'}), [dispatch])

    const checkLogin = (id, pwd) => {

        let user = new UserDto(id, pwd)
        axios.post(`http://localhost:3030/api/login`, user)
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
