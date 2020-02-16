import React from "react";
import AppSideBar from "./components/app/AppSideBar";
import Main from "./views";

export default () => {
    return (
        <div className="d-flex" id="wrapper">
            <AppSideBar/>
            <Main/>
        </div>
    )
}
