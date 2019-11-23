import React from 'react';
import {BrowserRouter as Router,} from "react-router-dom";
import Root from "./script/Root";
import './style/App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Root/>
        </Router>
    );
}

export default App;
