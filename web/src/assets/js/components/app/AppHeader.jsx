import React, {useState , useEffect} from "react";
import {$httpLogout} from "../../modules/api/user";
import {useDispatch, useSelector} from "react-redux";
import {Nav, Navbar, Dropdown, Form, Button, ButtonGroup} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as i from '@fortawesome/free-solid-svg-icons'
import {changeTheme} from "../../modules/reducer/user";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { useHistory } from 'react-router-dom';

export default () => {

    let dispatch = useDispatch()
    let initUser = useSelector(state => state.userReducer, []);
    let history = useHistory();

    let $offUser = () => {
        $httpLogout(dispatch , history)
    };


    let _goToHref = ()=>{
        history.push('/myinfo')
    }

    let theme = initUser.isTheme ? "primary" : "dark";

    return (
        // <Navbar bg="dark" variant="dark">
        <Navbar className="surface-bg">
            <Navbar.Brand href="#/home">
                <span className="title-ft">
                Application Manager
                </span>
            </Navbar.Brand>
            {/*app title*/}

            <Navbar.Collapse className="justify-content-end">
                <ButtonGroup>
                    <ThemeIcon dispatch={dispatch} theme={theme}/>

                    <HeadButton
                        icon={i.faAddressCard}
                        theme={theme}
                        onClick={_goToHref}
                        tooltip={'내정보'}/>

                    <HeadButton
                        icon={i.faSignOutAlt}
                        theme={theme}
                        onClick={$offUser}
                        tooltip={'로그아웃'}/>

                </ButtonGroup>
            </Navbar.Collapse>
        </Navbar>
    )
}

function HeadButton(props) {
    let icon = props.icon
    let theme = props.theme
    let _onClick = props.onClick
    let tooltip = props.tooltip
    let className = props.className

    return(
        <OverlayTrigger
            key={'bottom'}
            placement={'bottom'}
            overlay={
                <Tooltip>
                    {tooltip}
                </Tooltip>
            }>
            <Button variant={theme} onClick={_onClick}>
                <FontAwesomeIcon className={className} icon={icon}/>
            </Button>
        </OverlayTrigger>
    )
}

function ThemeIcon(props) {
    let dispatch = props.dispatch
    let theme = props.theme
    let _changeTheme = ()=>{
        dispatch(changeTheme())
    }
    let themeStr = theme =='dark' ? "라이트모드" : "다크모드"
    return (
        <HeadButton
            icon={i.faAdjust}
            theme={theme}
            className={"theme-icon"}
            onClick={_changeTheme}
            tooltip={themeStr}>
        </HeadButton>
    )
}
