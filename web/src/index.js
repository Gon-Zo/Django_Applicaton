import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import axios from 'axios'
import App from "./App";
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './assets/js/modules/reducer';
import {Provider, useDispatch} from 'react-redux';

import './assets/styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer, composeWithDevTools());

axios.defaults.baseURL = 'http://localhost:3030/api'

axios.interceptors.request.use(request => {
    console.log(request);
    let authToken = request.headers.common.Authorization;
    if(typeof authToken === 'undefined'){
        request.headers.common.Authorization = localStorage.getItem("Token")
        axios.defaults.headers.common['Authorization'] = localStorage.getItem("Token")
    }
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    return response;
}, error => {
    let err = error.response.data
    if (err.code === 'E001' || err.code === 'E002' || err.code === 'E003') {
        alert("세션 만료")
        localStorage.removeItem("Token")
        window.location.reload(true);
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




