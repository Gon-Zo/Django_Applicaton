import React from "react";
import axios from 'axios'
import {onUser, isOpen, clickPage , setUser} from '../user'

// import {useSelector} from "react-redux";
// let user = useSelector(state => state.appUser, []);

export const $fetchUsers = (dispatch, payload) => {

    axios.get(`/admin/user`, {
        params: {
            type: 'U',
            page: payload.page
        }
    }).then(res => onUser(res.data)).catch((err) => console.log(err))
}

export const $fetchUpdateToUser = (dispatch, payload) => {
    axios.put(`/admin/user/${payload.seq}`, payload)
        .then((res) => isOpen())
        .catch((err) => console.log(err))
}


export const $onPage = (dispatch, data) => {
    dispatch(clickPage(data))
}

export const $setUser = (dispatch , data)=>{
    dispatch(setUser(data))
}

export const $isOpen = (dispatch) =>{
    dispatch(isOpen())
}
