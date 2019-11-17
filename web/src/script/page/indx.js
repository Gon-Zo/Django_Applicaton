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
            <Route path="/Main">
                <Main/>
            </Route>
            <Route path="/User">
                <User/>
            </Route>
        </Switch>
    )
};

export default Info
