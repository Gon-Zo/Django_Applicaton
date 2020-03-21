import React, {createContext, useReducer, useContext} from 'react';
import axios from 'axios';
import {setProducts, setProduct, onOpen , setType , setIsOpenToCategory , setCategory } from '../reducer/product'

/**
 * 상품 리스트 호출
 * @param dispatch
 * @returns {Promise<void>}
 */
export function $httpProduct(dispatch) {
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
export function createProduct(dispatch, payload) {
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
export function getProduct(dispatch, seq) {
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
export function updateProduct(dispatch, payload) {
    axios.put(`/admin/product/${payload.seq}`, payload)
        .then(res => console.log('put', res.status))
}

/**
 * 상품 삭제
 * @param dispatch
 * @param seq
 * @returns {Promise<void>}
 */
export function $deleteByProd(dispatch, seq) {
    axios.delete(`/admin/product/${seq}`)
        .then(res => $httpProduct(dispatch))
        .catch(err => console.log(err))
}

/**
 * 모달 오픈
 * @param dispatch
 * @returns {Promise<void>}
 */
export function $isOpen(dispatch) {
    dispatch(onOpen())
}

export function $setMethod(dispatch , payload) {
    dispatch(setType(payload))
}

export function $setProduct(dispatch, payload) {
    dispatch(setProduct(payload))
}

export function $isOpenToCategory(dispatch) {
   dispatch(setIsOpenToCategory())
}

export function $httpCategory(dispatch) {
    axios.get(`/admin/category`)
        .then((res)=>dispatch(setCategory(res.data)))
        .catch(err=>console.log(err))
}
