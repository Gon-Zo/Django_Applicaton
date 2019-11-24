import React, {useState} from 'react'

import {
    Link
} from "react-router-dom";

const Info = () => {
    return 'Test'
};

const getMenu = () => {
    let test2 = Info();
    return (
        <div className="test">
            <div className="row">
                <div className="row">

                </div>
                <div className="row">

                </div>
            </div>

            {/* Market Profile */}
            <div className="row">
                <ul className="row">
                    <li className="row"><Link to="/Main"><span>Main</span></Link></li>
                    <li className="row"><Link to="/User"><span>User</span></Link></li>
                </ul>
            </div>
            {/*  // Side Menu end*/}
        </div>
    )
};

export default getMenu


