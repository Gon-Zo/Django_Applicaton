import React, {useState , useEffect} from "react";
import {$httpLogout} from "../../modules/api/user";
import {useDispatch} from "react-redux";
import {Nav, Navbar, Dropdown, Form, Button} from "react-bootstrap";
import SplitButton from "react-bootstrap/SplitButton";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as i from '@fortawesome/free-solid-svg-icons'

export default () => {
    let dispatch = useDispatch()

    let $offUser = () => {
        $httpLogout(dispatch)
    };

    return (
        // <Navbar bg="dark" variant="dark">
        <Navbar className="surface-bg">
            <Navbar.Brand href="#/home">
                <span className="light-ft">
                Application Manager
                </span>
            </Navbar.Brand>
            {/*app title*/}
            <Navbar.Collapse className="justify-content-end">

                <SplitButton
                    key={"down"}
                    id={`dropdown-button-drop-down`}
                    drop={"down"}
                    variant="dark"
                    title={<FontAwesomeIcon icon={i.faCog}></FontAwesomeIcon>}>

                {/*<SplitButton*/}
                {/*    className="surface-bg"*/}
                {/*    key={"down"}*/}
                {/*    id={`dropdown-button-drop-down`}*/}
                {/*    drop={"down"}*/}
                {/*    title={<FontAwesomeIcon icon={i.faCogs}></FontAwesomeIcon>}>*/}

                    <Dropdown.Item eventKey="1">
                        다크모드 /
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="2" href="/#/myinfo">
                        내정보
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="3" onClick={() => $offUser()}>
                        로그아웃
                    </Dropdown.Item>

                </SplitButton>

            </Navbar.Collapse>
        </Navbar>
    )
}
