// App
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Root from "./Root";
import Login from "./view/Login";

//Ex
import Counter from "./view/ex/Counter";


/**
 * setting to root view
 * @returns {*}
 */
const root = function () {
    return (
        <BrowserRouter>
            <Root/>
        </BrowserRouter>
    )
};

/**
 * setting to login view
 * @returns {*}
 */
const login = function () {
    return (
        <Login/>
    )
};

/**
 * setting Application
 * @param flag
 * @returns {*}
 */
const setApp = function (flag) {
    return flag ? login() : root();
};

/**
 * get Application
 * @param flag
 * @returns {*}
 */
const getApp = function (flag) {
    return setApp(flag)
};

/**
 * default function to return
 * @returns {*}
 */
export default () => {
    let temp = false;
    return getApp(temp)
    // return(
    //     <Counter/>
    // )
};
