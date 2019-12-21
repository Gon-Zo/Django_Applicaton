import React from 'react'
import * as fa from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import MenuGroup from "../menu/MenuGroup";
import {Link} from "react-router-dom";


export default () => {
    return (
        <nav className="navbar navbar-expand-xl">
            <div className="container h-100">
                <Link className="navbar-brand" to="/">
                    <h1 className="tm-site-title mb-0">Product Admin</h1>
                </Link>
                <button className="navbar-toggler ml-auto mr-0" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/*<i className="fas fa-bars tm-nav-icon"></i>*/}
                    <FontAwesomeIcon icon={fa.faBars} size="2x" className="tm-nav-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <MenuGroup/>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link d-block" href="login.html">
                                Admin, <b>Logout</b>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};
