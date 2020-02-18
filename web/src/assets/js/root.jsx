import React from "react";
import AppSideBar from "./components/app/AppSideBar";
import Main from "./views";
import LoginContainer from "./containers/LoginContainer";
import {useSelector} from "react-redux";

function Root() {
    let user = useSelector(state => state.appUser, [])
    return (
        <div className="d-flex" id="wrapper">
            <AppSideBar/>
            <Main/>
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
