import React, {useState, useEffect} from "react";
import {Container, Form, Button, Row, Col} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {$httpLogin} from "../modules/api/user";

export default () => {

    let [id, setId] = useState('')
    let [pwd, setPwd] = useState('')

    let idInput
    let pwdInput

    let dispatch = useDispatch()

    const loginUser = () => {
        $httpLogin(dispatch, {id: id, pwd: pwd})
    };

    return (
        <div id="loginWrap">
            <div id="loginBox">
                <Container>

                    <Row className="test">
                        <p>
                            Logo Box
                        </p>
                    </Row>

                    <Row className="test">
                        <Container>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"
                                                  ref={input => idInput = input}
                                                  onChange={() => {
                                                      let val = idInput.value
                                                      setId(val)
                                                  }}/>
                                </Form.Group>
                                {/*input end*/}
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"
                                                  ref={input => pwdInput = input}
                                                  onChange={() => {
                                                      let val = pwdInput.value
                                                      setPwd(val)
                                                  }}/>
                                </Form.Group>
                                {/*password input end*/}

                                <Button variant="dark" size="lg" block onClick={loginUser}>
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
