import React from "react";
import AppSideBar from "./components/app/AppSideBar";
import Main from "./views";
import LoginContainer from "./containers/LoginContainer";
import {useSelector} from "react-redux";
import {Switch, Route} from 'react-router-dom';
import AppUser from "./views/AppUser";

function Root() {
    let user = useSelector(state => state.appUser, [])
    return (
        <div className="d-flex content-bg" id="wrapper">
            <AppSideBar/>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/user" component={AppUser}/>
            </Switch>
        </div>
    )
}

function renderApp(isLogin) {
    if (isLogin) {
        return (
            <Root/>
        )
    } else {
        return (
            <LoginContainer/>
        )
    }
}

export default Root
