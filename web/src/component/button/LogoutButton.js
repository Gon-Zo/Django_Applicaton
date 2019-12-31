import React, {useCallback, useState} from 'react'
import {useSelector, useDispatch} from "react-redux";

export default () => {

    const dispatch = useDispatch();

    const isFall = useCallback(() => dispatch({type: "user/LOGIN_FALL"}), [dispatch]);

    const onClick = () => {
        console.log("Logout Success");
        localStorage.removeItem("Token");
        isFall()
    };

    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                {/*<a className="nav-link d-block" href="login.html">*/}
                {/*    Admin, <b>Logout</b>*/}
                {/*</a>*/}
                <button className="nav-link d-block app-logout-button" type="button" onClick={onClick}>
                    Admin , Logout
                </button>
            </li>
        </ul>
    );

};
