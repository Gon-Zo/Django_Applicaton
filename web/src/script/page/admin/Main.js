import React, {useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
// Info
const Main = () => {
    return (
        <div>
            <span className='div1'>test</span>
            <Container>
                <Row>
                    <Col className="test">1 of 2</Col>
                    <Col className="test">2 of 2</Col>
                </Row>
                <Row>
                    <Col className="test">1 of 3</Col>
                    <Col className="test">2 of 3</Col>
                    <Col className="test">3 of 3</Col>
                </Row>
            </Container>
        </div>
    )
};

export default Main
