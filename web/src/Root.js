import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from "./App";
import Login from "./view/Login";

const Root = () => {
    let temp = true;
    return getApp(temp);
};

const setApp = function (flag) {
    return flag ? (
        <Login/>
    ) : (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );
};

const getApp = function (flag) {
    return setApp(flag)
};

export default Root;
