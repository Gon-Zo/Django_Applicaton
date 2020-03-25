import React, {useState , useEffect} from "react";
import {$httpLogout} from "../../modules/api/user";
import {useDispatch} from "react-redux";
import {Nav, Navbar, Dropdown, Form, Button} from "react-bootstrap";
import SplitButton from "react-bootstrap/SplitButton";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as i from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';

export default () => {
    let dispatch = useDispatch()

    let $offUser = () => {
        $httpLogout(dispatch)
    };

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#/home">Application Manager</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <SplitButton
                    key={"down"}
                    id={`dropdown-button-drop-down`}
                    drop={"down"}
                    variant="dark"
                    title={<FontAwesomeIcon icon={i.faCogs}></FontAwesomeIcon>}>

                    <Dropdown.Item eventKey="1" href="/#/setting">
                            MyInfo
                    </Dropdown.Item>

                    <Dropdown.Item  eventKey="1" onClick={()=>$offUser()}>Logout</Dropdown.Item>

                </SplitButton>
            </Navbar.Collapse>

        </Navbar>
    )
}
