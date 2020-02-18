import React from "react";
import {Link} from "react-router-dom";
// import {Col, Container, Row} from "react-bootstrap";

export default () => {
    return (
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">
                <Link to="/">
                    <h5 id="appTitle">
                        Application Manager
                    </h5>
                </Link>
            </div>
            <div className="list-group list-group-flush">
                <Link to="/user" className="list-group-item list-group-item-action bg-light">User</Link>
                <a href="#" className="list-group-item list-group-item-action bg-light">Dashboard</a>
                <a href="#" className="list-group-item list-group-item-action bg-light">Shortcuts</a>
                <a href="#" className="list-group-item list-group-item-action bg-light">Overview</a>
                <a href="#" className="list-group-item list-group-item-action bg-light">Events</a>
                <a href="#" className="list-group-item list-group-item-action bg-light">Profile</a>
                <a href="#" className="list-group-item list-group-item-action bg-light">Status</a>
            </div>
        </div>
    )
}
