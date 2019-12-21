// App
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Root from "./Root";
import LoginContainer from "./containers/LoginContainer";
import {useSelector} from "react-redux";

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
        <LoginContainer/>
    )
};

/**
 * setting Application
 * @param flag
 * @returns {*}
 */
const setApp = function (flag) {
    return flag ? root() : login();
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
    // const users = useSelector(state => state.users, []);
    return getApp(true)
};
