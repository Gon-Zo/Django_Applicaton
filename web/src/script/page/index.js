import React from 'react'

import Main from "./admin/Main";
import User from "./admin/User";

import {
    Switch,
    Route,
} from "react-router-dom";

const Info = () => {
    return (
        <Switch>
            <Route exact path="/Main" component={Main}/>
            <Route path="/User" component={User}/>
        </Switch>
    )
};

export default Info
