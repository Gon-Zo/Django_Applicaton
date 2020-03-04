import React, {createContext, useReducer, useContext} from 'react';
import axios from 'axios';
import {setProducts , setProduct} from '../reducer/product'

/**
 * products to list
 * @param dispatch
 * @returns {Promise<void>}
 */
export async function getProducts(dispatch) {
    axios.get(`/admin/product`)
        .then(res => {
            dispatch(setProducts(res.data))
        })
        .catch((err) => console.log(err))
}

/**
 * create to product
 * @param dispatch
 * @param payload
 * @returns {Promise<void>}
 */
export async function createProduct(dispatch, payload) {
    axios.post(`/admin/product`)
        .then(res => console.log('create product', res.status))
        .catch(error => console.log(error))
}

/**
 * Get Product to object
 * @param dispatch
 * @param seq
 * @returns {Promise<void>}
 */
export async function getProduct(dispatch, seq) {
    axios.get(`/admin/product/${seq}`)
        .then(res => dispatch(setProduct(res.data)))
        .catch(error => console.log(error))
}

/**
 * update to product info
 * @param dispatch
 * @param payload
 * @returns {Promise<void>}
 */
export async function updateProduct(dispatch, payload) {
    axios.put(`/admin/product/${payload.seq}`, payload)
        .then(res => console.log('put', res.status))
}

/**
 * delete to product
 * @param dispatch
 * @param seq
 * @returns {Promise<void>}
 */
export async function deleteProduct(dispatch, seq) {
    axios.delete(`/admin/product/${seq}`)
        .then(res => console.log(res.status))
        .catch(err => console.log(err))
}
