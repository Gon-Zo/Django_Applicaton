import React from "react";
import axios from 'axios'
import {onUser, isOpen, clickPage, setUser, onLogout, onLogin} from '../reducer/user'
// import { useHistory } from "react-router-dom";

export const $httpLogout = (dispatch) =>{
    axios.defaults.headers.common['Authorization'] = undefined;
    localStorage.removeItem('Token');
    // window.location.href = 'http://localhost:3000/';

    // todo : logout dev
    dispatch(onLogout())
};

export const $httpLogin = (dispatch, payload) => {
    axios.post(`/login`, payload)
        .then((res) => {
            let token = res.data;
            localStorage.setItem("Token", token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            // context.router.history.push("/home")
            dispatch(onLogin())
        })
        .catch(error => console.log(error))
};

export const $fetchUsers = (dispatch, payload) => {

    axios.get(`/admin/user`, {
        params: {
            type: 'U',
            page: payload.page
        }
    }).then(res => dispatch(onUser(res.data))
    ).catch((err) => console.log(err))
};

export const $updateUser = (dispatch, payload) => {
    let user = payload.user;
    console.log(JSON.stringify(user));
    let seq = user.seq;

    delete user.seq;
    delete user.create_at;

    axios.put(`/admin/user/${seq}`, user)
        .then((res) => {
            // $isOpen(dispatch);
            // $fetchUsers(dispatch, payload)
            // todo : update dev
        })
        .catch((err) => console.log(err))
};


export const $onPage = (dispatch, data) => {
    dispatch(clickPage(data))
}

export const $setUser = (dispatch, data) => {
    dispatch(setUser(data))
}

export const $isUserModalOpen = (dispatch) => {
    dispatch(isOpen())
}
