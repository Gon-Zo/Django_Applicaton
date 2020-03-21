import React from "react";
import AppSideBar from "./components/app/AppSideBar";
import Main from "./views";
import {Switch, Route} from 'react-router-dom';
import AppUser from "./views/AppUser";
import AppDashboard from "./views/AppDashboard";
import AppProduct from "./views/AppProduct";
import AppHeader from "./components/app/AppHeader";
import AppSetting from "./views/AppSetting";
import AppLogin from "./views/AppLogin";
import {useSelector} from "react-redux";

function Root() {

    let initUser = useSelector(state => state.userReducer, []);

    if (initUser.isLogin) {
        return (
            <div>
                <AppHeader/>
                <div className="d-flex" id="wrapper">
                    <AppSideBar/>
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route path="/user" component={AppUser}/>
                        <Route path="/dashboard" component={AppDashboard}/>
                        <Route path="/product" component={AppProduct}/>
                        <Route path="/setting" component={AppSetting}/>
                    </Switch>
                </div>
            </div>
        )
    }

    return (
        <AppLogin/>
    )

}

export default Root
