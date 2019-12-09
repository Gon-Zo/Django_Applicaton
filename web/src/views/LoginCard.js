import {Button, Col, FormInput, Row} from "shards-react";
import React from "react";
import "../shards-dashboard/styles/custom.css";

const loginLayout = () => {
    return (
        <div id="loginWrap">
            <div id="loginBox">
                <div>

                </div>
                {/* logo box */}
                <div>
                    <Row form>
                        {/* Email */}
                        <Col md="6" className="form-group">
                            <label htmlFor="feEmail">아이디</label>
                            <FormInput
                                type="email"
                                id="feEmail"
                                placeholder="Email Address"
                                value="sierra@example.com"
                                onChange={() => {

                                }}
                                autoComplete="email"
                            />
                        </Col>
                        {/* Password */}
                        <Col md="6" className="form-group">
                            <label htmlFor="fePassword">비밀번호</label>
                            <FormInput
                                type="password"
                                id="fePassword"
                                placeholder="Password"
                                value="EX@MPL#P@$$w0RD"
                                onChange={() => {
                                }}
                                autoComplete="current-password"
                            />
                        </Col>
                    </Row>
                </div>
                {/* // Input Box end*/}
                <div>
                    <Button outline
                            theme="secondary"
                            className="mb-2 mr-1" onClick={() => {
                        alert("test")
                    }}>
                        Secondary
                    </Button>
                </div>
            </div>
            {/* // loginBox end */}
        </div>
        // loginWrap end

    );
};

export default loginLayout();
