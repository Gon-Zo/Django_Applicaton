import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import axios from 'axios'
import App from "./App";
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './assets/js/modules';
import {Provider, useDispatch} from 'react-redux';

import './assets/styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {$httpLogout} from "./assets/js/modules/api/user";

const store = createStore(rootReducer, composeWithDevTools());

axios.defaults.baseURL = 'http://localhost:3030/api'

if (typeof axios.defaults.headers.common['Authorization'] === 'undefined') {
    let token = localStorage.getItem("Token")
    if (token !== null) {
        axios.defaults.headers.common['Authorization'] = token
    }
}

axios.interceptors.request.use(request => {
    console.log(request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    // Edit response config
    return response;
}, error => {
    let err = error.response.data
    let dispatch = useDispatch()
    if (err.code === 'E001' || err.code === 'E002' || err.code === 'E003') {
        $httpLogout(dispatch)
    }
    return Promise.reject(error);
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();




