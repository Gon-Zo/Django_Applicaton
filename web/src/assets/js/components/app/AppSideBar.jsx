import React from "react";
import {Link} from "react-router-dom";
import {Col, Image, Row} from "react-bootstrap";
import imageSrc from '../../../image/default.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

export default () => {
    return (
        <div className="border-right" id="sidebar-wrapper">
            <div className="sidebar-heading sidebar-profile">
                <Row>
                    <Col>
                        <Image width="150" height="150" src={imageSrc} className="user-profile"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span>TEST</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span>TEST</span>
                    </Col>
                </Row>
            </div>
            <div className="list-group list-group-flush">
                <Link to="/user" className="list-group-item list-group-item-action bg-light">
                    <FontAwesomeIcon icon={faUser}/>
                    User
                </Link>
                <Link to="/" className="list-group-item list-group-item-action bg-light">Dashboard</Link>
            </div>
        </div>
    );
}
