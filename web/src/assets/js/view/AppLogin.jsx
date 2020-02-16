<<<<<<< HEAD
import React, {useState, useEffect} from "react";
import {Container, Form, Button, Row, Col} from "react-bootstrap";
import axios from 'axios'
import {UserDto} from "../dto/AppDto";

const changeId = () => {

}

export default () => {

    let [id, setId] = useState('')
    let [pwd, setPwd] = useState('')

    let idInput
    let pwdInput

    const loginUser = () => {
        let user = new UserDto(id, pwd)
        axios.post(`http://localhost:3030/api/login`, user)
            .then((res) => {
                let token = res.data;
                localStorage.setItem("Token", token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            }).catch((err) => console.log(err))
    };

=======
import React from "react";
import {Container, Form, Button, Row, Col} from "react-bootstrap";


export default () => {
>>>>>>> origin/master
    return (
        <div id="loginWrap">
            <div id="loginBox">
                <Container>
                    <Row className="test">
                        <p>
<<<<<<< HEAD
                            Logo Box
=======
                            TEST
>>>>>>> origin/master
                        </p>
                    </Row>
                    <Row className="test">
                        <Container>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
<<<<<<< HEAD
                                    <Form.Control type="email" placeholder="Enter email" ref={input => idInput = input}
                                                  onChange={() => {
                                                      let val = idInput.value
                                                      setId(val)
                                                  }}/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" ref={input => pwdInput = input}
                                                  onChange={() => {
                                                      let val = pwdInput.value
                                                      setPwd(val)
                                                  }}/>
                                </Form.Group>
                                <Button variant="dark" size="lg" block onClick={loginUser}>
=======
                                    <Form.Control type="email" placeholder="Enter email"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"/>
                                </Form.Group>
                                <Button variant="dark" size="lg" block onClick={() => {
                                    alert("Test")
                                }}>
>>>>>>> origin/master
                                    Login
                                </Button>
                            </Form>
                        </Container>
                    </Row>
                </Container>
                {/* Container end*/}
            </div>
            {/*#loginBox end*/}
        </div>
        // #loginWrap end
    )
}
