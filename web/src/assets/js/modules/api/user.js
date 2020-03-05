import React from "react";
import axios from 'axios'
import {onUser, isOpen, clickPage , setUser} from '../user'

export const $fetchUsers = (dispatch, payload) => {
    axios.get(`/admin/user`, {
        params: {
            type: 'U',
            page: payload.page
        }
    }).then(res => dispatch (onUser(res.data))
    ).catch((err) => console.log(err))
}

export const $fetchUpdateToUser = (dispatch, payload) => {
    let user = payload.user
    let seq = user.seq

    user['is_use'] = user.isUse

    delete user.seq
    delete user.isUse
    delete user.createAt
    axios.put(`/admin/user/${seq}`, user)
        .then((res) => {
            $isOpen(dispatch)
            $fetchUsers(dispatch , payload)
        })
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
