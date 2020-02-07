// Root
import React, {useState} from "react";
import {Route, Switch} from 'react-router-dom';
import Header from "./component/comm/Header";
import Footer from "./component/comm/Footer";

import Dashboard from "./view/Dashboard";
import Products from "./view/Products";
import AddProduct from "./view/AddProduct";
import AddCategory from "./view/AddCategory";
import Report from "./view/Report";
import Accounts from "./view/Accounts";
import Settings from "./view/Settings";

export default () => {
    return (
        <div className="app-style-c9" id="home">
            <Header/>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route path="/product" component={Products}/>
                <Route path="/report" component={Report}/>
                <Route path="/account" component={Accounts}/>
                <Route path="/setting" component={Settings}/>
                <Route path="/add-product" component={AddProduct}/>
                <Route path="/add-category" component={AddCategory}/>
            </Switch>
            <Footer/>
        </div>
    )
};

