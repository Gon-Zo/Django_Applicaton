import React from "react";
// import {Col, Container, Row} from "react-bootstrap";

export default () => {
    return (
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">
                <h5 id="appTitle">
                    Application Manager
                </h5>
            </div>
            <div className="list-group list-group-flush">
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
