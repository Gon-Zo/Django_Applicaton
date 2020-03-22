import React from 'react';
import Root from "./assets/js/Root";
import {BrowserRouter} from 'react-router-dom';
// import { hot } from 'react-hot-loader/root';

function App() {
    return (
            <BrowserRouter>
                <Root/>
            </BrowserRouter>
    )
}

export default App;
