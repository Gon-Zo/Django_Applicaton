import React, {createContext, useReducer, useContext} from 'react';
import axios from 'axios';
import {onProduct} from '../product'

export function getProducts(dispatch) {
    axios.get(`/admin/product`)
        .then(res =>{
            dispatch(onProduct(res.data))
        })
        .catch((err) => console.log(err))
}
