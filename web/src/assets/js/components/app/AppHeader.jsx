import React from "react";
import {$httpLogout} from "../../modules/api/user";
import {useDispatch} from "react-redux";

export default () => {
    let dispatch = useDispatch()

    let $offUser = () =>{
         $httpLogout(dispatch)
    }

    return (
        <nav className="navbar navbar-dark bg-dark">

            <div className="navbar-brand">
                    <span>
                       Application Manager
                    </span>
            </div>
            <div>
                <button className="btn btn-default btn-dark" onClick={()=>$offUser()}>로그아웃</button>
            </div>

            {/*<div className="collapse navbar-collapse" id="navbarNavAltMarkup">*/}
            {/*    <div className="navbar-nav">*/}
            {/*        <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>*/}
            {/*        <a className="nav-item nav-link" href="#">Features</a>*/}
            {/*        <a className="nav-item nav-link" href="#">Pricing</a>*/}
            {/*        <a className="nav-item nav-link disabled" href="#">Disabled</a>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </nav>
    )
}
