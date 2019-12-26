import React, {useState} from 'react'
import axios from 'axios'
import {BASE_URL} from '../assets/comm/base'

const user = class User {
    constructor(id, pwd) {
        this.id = id;
        this.pwd = pwd;
    }

    getId() {
        return this.id
    }

    getPwd() {
        return this.pwd
    }
};


export default ({onSuccess, onFall, userYn}) => {

    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    const onChange = function (e) {
        let target = e.target.id;
        let val = e.target.value;
        if (target === 'id') {
            setId(val)
        } else {
            setPwd(val)
        }
    };

    const onClick = function () {
        // console.log("test success ID >> " + id + "<><><> " + pwd)
        // todo : 정규표현식

        if (isNotLogin(id, pwd)) {
            onFall()
        } else {
            loginCheck();
        }
    };


    const loginCheck = () => {
        let params = new URLSearchParams();

        params.append("id", id);
        params.append("pwd", pwd);

        // let test = new Param(id, pwd);
        // let test = param(id, pwd).getParam();
        // console.log(test);

        axios.post(`${BASE_URL}/api/login`, params)
            .then((res) => {
                // console.log(res.status === 200)
                // console.log(">>>>>>>>>>>>>>>>>>>")
                console.log("Login success");
                onSuccess()
            }).catch((error => console.log(error)))

    };

    const isNotLogin = (id, pwd) => {
        return !(isNotId(id) || isNotPwd(pwd));
    };

    const isNotId = (idStr) => {
        return idStr !== '';
    };

    const isNotPwd = (pwdStr) => {
        return pwdStr !== '';
    };


    return (
        <div className="login_wrap">

            <div>
                <img src="/images/logo.jpg" alt="Logo"/>
                <span>{userYn}</span>
            </div>
            {/*Image Logo*/}

            <div className="row mt-2">
                <div className="col-12">
                    <form action="" method="post" className="tm-login-form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                name="id"
                                type="text"
                                className="form-control validate"
                                id="id"
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="password">Password</label>
                            <input
                                name="password"
                                type="password"
                                className="form-control validate"
                                id="password"
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="form-group mt-4">
                            <button
                                type="button"
                                onClick={onClick}
                                className="btn btn-primary btn-block text-uppercase">
                                Login
                            </button>
                        </div>
                        <button className="mt-5 btn btn-primary btn-block text-uppercase">
                            Forgot your password?
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
