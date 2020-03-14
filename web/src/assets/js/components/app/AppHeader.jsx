import React, {useState , useEffect} from "react";
import {$httpLogout} from "../../modules/api/user";
import {useDispatch} from "react-redux";

export default () => {
    let dispatch = useDispatch()
    let [title , setTitle] = useState('')

    let $offUser = () => {
        $httpLogout(dispatch)
    }

    let $readyToHead = () => {
        let urlArray = window.location.pathname.split("/")
        let url = urlArray[1].toUpperCase();
        // console.log('url' , url)
        setTitle(url)
    }

    useEffect(()=>{
        $readyToHead()
    })

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="test1">
                <a className="navbar-brand" href="#">Application Manager</a>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
                <span className="light-ft">{title}</span>
            </div>
            <div>
                <button className="btn btn-default btn-dark" onClick={() => $offUser()}>로그아웃</button>
            </div>
        </nav>
    )
}
