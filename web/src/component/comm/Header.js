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


                    {/*<ul className="navbar-nav mx-auto h-100">*/}


                        {/*<li className="nav-item dropdown">*/}

                        {/*    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"*/}
                        {/*       data-toggle="dropdown"*/}
                        {/*       aria-haspopup="true" aria-expanded="false">*/}
                        {/*        /!*<i className="far fa-file-alt"></i>*!/*/}
                        {/*        <FontAwesomeIcon icon={fa.faFileAlt} size="2x" className="tm-nav-icon"/>*/}
                        {/*        <span>*/}
                        {/*            Reports <i className="fas fa-angle-down"></i>*/}
                        {/*        </span>*/}
                        {/*    </a>*/}
                        {/*    <div className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
                        {/*        <a className="dropdown-item" href="#">Daily Report</a>*/}
                        {/*        <a className="dropdown-item" href="#">Weekly Report</a>*/}
                        {/*        <a className="dropdown-item" href="#">Yearly Report</a>*/}
                        {/*    </div>*/}
                        {/*</li>*/}

                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link" href="products.html">*/}
                        {/*        /!*<i className="fas fa-shopping-cart"></i>*!/*/}
                        {/*        <FontAwesomeIcon icon={fa.faShoppingCart} size="2x"/>*/}
                        {/*        Products*/}
                        {/*    </a>*/}
                        {/*</li>*/}

                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link" href="accounts.html">*/}
                        {/*        /!*<i className="far fa-user"></i>*!/*/}
                        {/*        <FontAwesomeIcon icon={fa.faUser} size="2x"/>*/}
                        {/*        Accounts*/}
                        {/*    </a>*/}
                        {/*</li>*/}

                    {/*    <li className="nav-item dropdown">*/}
                    {/*        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"*/}
                    {/*           data-toggle="dropdown"*/}
                    {/*           aria-haspopup="true" aria-expanded="false">*/}
                    {/*            /!*<i className="fas fa-cog"></i>*!/*/}
                    {/*            <FontAwesomeIcon icon={fa.faCog} size="2x"/>*/}
                    {/*            <span>*/}
                    {/*                Settings*/}
                    {/*                <FontAwesomeIcon icon={fa.faAngleDown} size="1x"/>*/}
                    {/*                /!*<i className="fas fa-angle-down"></i>*!/*/}
                    {/*            </span>*/}
                    {/*        </a>*/}
                    {/*        <div className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
                    {/*            <a className="dropdown-item" href="#">Profile</a>*/}
                    {/*            <a className="dropdown-item" href="#">Billing</a>*/}
                    {/*            <a className="dropdown-item" href="#">Customize</a>*/}
                    {/*        </div>*/}
                    {/*    </li>*/}

                    {/*</ul>*/}

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
