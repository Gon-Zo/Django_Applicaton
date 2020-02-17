import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import axios from 'axios'
import App from "./App";
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './assets/js/modules';
import {Provider} from 'react-redux';

import './assets/styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

// const networkConfig = {
//     baseURL: 'http://localhost:3030/api',
//     timeout: 30000,
// };
// axios.create(networkConfig)

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




