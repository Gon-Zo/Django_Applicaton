import React, {createContext, useReducer, useContext} from 'react';
import axios from 'axios';
import {setProducts, setProduct, onOpen , setType} from '../reducer/product'

/**
 * 상품 리스트 호출
 * @param dispatch
 * @returns {Promise<void>}
 */
export async function $httpProduct(dispatch) {
    axios.get(`/admin/product`, {
        params : {
            pageNum : 10 ,
            page : 1 ,
            storeNo : 1,
        }
    })
        .then(res => {
            dispatch(setProducts(res.data))
        })
        .catch((err) => console.log(err))
}

/**
 * 상품등록
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
 * 상품 호출
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
 * 상품 수정
 * @param dispatch
 * @param payload
 * @returns {Promise<void>}
 */
export async function updateProduct(dispatch, payload) {
    axios.put(`/admin/product/${payload.seq}`, payload)
        .then(res => console.log('put', res.status))
}

/**
 * 상품 삭제
 * @param dispatch
 * @param seq
 * @returns {Promise<void>}
 */
export async function deleteProduct(dispatch, seq) {
    axios.delete(`/admin/product/${seq}`)
        .then(res => console.log(res.status))
        .catch(err => console.log(err))
}

/**
 * 모달 오픈
 * @param dispatch
 * @returns {Promise<void>}
 */
export async function $isOpen(dispatch) {
    dispatch(onOpen())
}

export async function $setMethod(dispatch , payload) {
    dispatch(setType(payload))
}
