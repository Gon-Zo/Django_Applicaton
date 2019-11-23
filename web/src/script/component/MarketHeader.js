import React, {useState} from "react";

const Info = () => {

};

const MarketHeader = () => {

    let info = Info();
    // navbar-light bg-light
    return (
        <div className="test1">
            <nav className="navbar ">
                <a className="navbar-brand" href="#">
                    <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30"
                         className="d-inline-block align-top" alt=""/>
                    Header
                </a>
            </nav>
        </div>
    )
};

export default MarketHeader
