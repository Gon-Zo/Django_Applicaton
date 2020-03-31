import React, {useState , useEffect} from "react";
import {$httpLogout} from "../../modules/api/user";
import {useDispatch, useSelector} from "react-redux";
import {Nav, Navbar, Dropdown, Form, Button} from "react-bootstrap";
import SplitButton from "react-bootstrap/SplitButton";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as i from '@fortawesome/free-solid-svg-icons'
import {changeTheme} from "../../modules/reducer/user";

function ThemeIcon(props) {
    let isTheme = props.isTheme
    let themeStr = isTheme ? "다크 모드" : "라이트 모드"
    return (
        <>
            <FontAwesomeIcon className="theme-icon " icon={i.faAdjust}/>
            <span className="ml-2">{themeStr}</span>
        </>
    )
}

export default () => {

    let dispatch = useDispatch()
    let initUser = useSelector(state => state.userReducer, []);

    let $offUser = () => {
        $httpLogout(dispatch)
    };


    return (
        // <Navbar bg="dark" variant="dark">
        <Navbar className="surface-bg">
            <Navbar.Brand href="#/home">
                <span className="main-ft">
                Application Manager
                </span>
            </Navbar.Brand>
            {/*app title*/}

            <Navbar.Collapse className="justify-content-end">
                <i className="fab fa-cloudscale"></i>
                <SplitButton
                    key={"down"}
                    id={`dropdown-button-drop-down`}
                    drop={"down"}
                    variant={initUser.isTheme ? "light" : "dark"}
                    title={<FontAwesomeIcon icon={i.faCloudRain}></FontAwesomeIcon>} >

                    <Dropdown.Item eventKey="1"  onClick={()=>dispatch(changeTheme())}  >
                        <ThemeIcon isTheme={initUser.isTheme}/>
                        {/*{_actionTheme}*/}
                        {/*다크모드*/}
                    </Dropdown.Item>
                    {/*<i className="far fa-address-card"></i>*/}
                    <Dropdown.Item eventKey="2" href="/#/myinfo">
                        <FontAwesomeIcon icon={i.faAddressCard}/>
                        <span className="ml-2">
                        내정보
                        </span>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="3" onClick={() => $offUser()}>
                        <FontAwesomeIcon icon={i.faSignOutAlt}/>
                        <span className="ml-2">
                        로그아웃
                       </span> 
                    </Dropdown.Item>

                </SplitButton>

            </Navbar.Collapse>
        </Navbar>
    )
}
