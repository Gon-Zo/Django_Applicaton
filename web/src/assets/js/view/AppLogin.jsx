import React from "react";
import {Container, Form, Button, Row, Col} from "react-bootstrap";


export default () => {
    return (
        <div id="loginWrap">
            <div id="loginBox">
                <Container>
                    <Row className="test">
                        <p>
                            TEST
                        </p>
                    </Row>
                    <Row className="test">
                        <Container>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email"/>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"/>
                                </Form.Group>
                                <Button variant="dark" size="lg" block onClick={() => {
                                    alert("Test")
                                }}>
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
