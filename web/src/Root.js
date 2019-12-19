// Root
import React, {useState} from "react";
import {Route, Switch} from 'react-router-dom';
import Header from "./component/comm/Header";
import Footer from "./component/comm/Footer";

import Dashboard from "./view/Dashboard";
import Products from "./view/Products";
import AddProduct from "./view/AddProduct";
import AddCategory from "./view/AddCategory";

export default () => {
    return (
        <div className="" id="home">
            <Header/>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route path="/products" component={Products}/>
                <Route path="/add-product" component={AddProduct}/>
                <Route path="/add-category" component={AddCategory}/>
            </Switch>
            <Footer/>
        </div>
    )
};

const loginCard = () => {
    return (
        <div>
            <div>

            </div>
            {/*logoBox*/}
            <div>
                <input/>
                <input/>
            </div>
            <div>
                <button>로그인</button>
            </div>
        </div>
    )
};

