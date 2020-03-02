import React from "react";
import {Container, Row, Col, Card, Button} from "react-bootstrap";

export default () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col xs={6} md={4}>
                    <div>
                        <span>Category</span>
                    </div>
                </Col>
                <Col xs={12} md={8} className="box-test test-wrap">
                    <div className="title-wrap">
                        <h4 className="page-title">상품 목록</h4>
                        <Button variant="dark">상품 등록</Button>
                    </div>
                    <Row className="card-group">
                        <RenderCard/>
                        <RenderCard/>
                        <RenderCard/>
                        <RenderCard/>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

function RenderCard() {
    return (
        <Col>
            <Card style={{width: '18rem'}} className="card-test">
                {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
