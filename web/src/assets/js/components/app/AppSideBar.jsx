import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as i from '@fortawesome/free-solid-svg-icons'

export default () => {
    return (
        <div className=" surface-bg" id="sidebar-wrapper">
            <div className="list-group list-group-flush">
                <Link to="/home"
                      className="list-group-item list-group-item-action light-ft surface-bg">
                    <FontAwesomeIcon icon={i.faHome}/>
                    <span>
                    Home
                    </span>
                </Link>
                <Link to="/user"
                      className="list-group-item list-group-item-action light-ft surface-bg">
                    <FontAwesomeIcon icon={i.faUser}/>
                    User
                </Link>
                <Link to="/dashboard"
                      className="list-group-item list-group-item-action  light-ft surface-bg">
                    Dashboard
                </Link>
                <Link to="/product"
                      className="list-group-item list-group-item-action light-ft surface-bg">
                    Product
                </Link>
                <Link to="/setting"
                      className="list-group-item list-group-item-action light-ft surface-bg">
                    Setting
                </Link>
            </div>
        </div>
    );
}
