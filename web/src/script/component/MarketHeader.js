import React, {useState} from "react";

const Info = () => {

};

let headerSty = {
    position: 'fixed',
    width: '100%',
    height: '50px',
    top: 0,
    left: 0,
    backgroundColor: '#00f'
};

const MarketHeader = () => {

    let info = Info();
    // navbar-light bg-light
    return (
        <div style={headerSty}>
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
