import React from "react";
import AppSideBar from "./components/app/AppSideBar";
import Main from "./views";
import LoginContainer from "./containers/LoginContainer";
import {useSelector} from "react-redux";
import {Switch, Route} from 'react-router-dom';
import AppUser from "./views/AppUser";
import AppDashboard from "./views/AppDashboard";
import AppProduct from "./views/AppProduct";

function Root() {
    let user = useSelector(state => state.appUser, [])
    return (
        <div className="d-flex content-bg" id="wrapper">
            <AppSideBar/>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/user" component={AppUser}/>
                <Route path="/dashboard" component={AppDashboard}/>
                <Route path="/product" component={AppProduct}/>
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
