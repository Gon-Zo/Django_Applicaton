import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './assets/styles/index.css'
import './assets/js/index'

import {createStore} from "redux";
import {shallowEqual, useSelector} from 'react-redux'

// const selectedData = useSelector(selectorReturningObject, shallowEqual)

// const store = createStore(rootReducer);
// ReactDOM.render(<App/>, document.getElementById("root"));

// const store = createStore(rootReducer)

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );
//

ReactDOM.render(<App/>, document.getElementById("root"));
