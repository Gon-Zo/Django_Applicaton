import React, {useState} from 'react'



export default (props) => {

    const [id, setId] = useState('');

    const [pwd , setPwd]  = useState('');

    const onChange = function(e){
        let target = e.target.id;
        let val = e.target.value;
        if(target === 'id'){
            setId(val)
        }else{
            setPwd(val)
        }
    };


    const onClick = function () {
        alert("test success ID >> " + id  + "<><><> "  + pwd)
        // todo : 정규표현식

    };

    return (
        <div className="login_wrap">
            <div>
                <img src="/images/logo.jpg" alt="Logo"/>
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
                                className="btn btn-primary btn-block text-uppercase" >
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
