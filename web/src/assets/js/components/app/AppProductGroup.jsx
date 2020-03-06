import React from "react";
import {Button, Card, Col, Row} from "react-bootstrap";

function RenderCard(props) {
    let data = props.data
    let idx = props.idx
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

export default (props) =>{

    let data = props.data
    console.log(JSON.stringify(data))

    if(typeof data === 'undefined'){
        return (
            <div>
                <span>로딩중</span>
            </div>
        )
    }
    return(
        <Row className="card-group">
            {
                data.map((m , i )=>(
                    <Col key={i}>
                        <Card style={{width: '18rem'}} className="card-test">
                            {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                            <Card.Body>
                                <Card.Title>{m.title}</Card.Title>
                                <Card.Text>
                                    {m.info}
                                </Card.Text>
                                <Card.Text>
                                    {m.price}
                                </Card.Text>
                                <Card.Text>
                                    {m.count}
                                </Card.Text>
                                <Card.Text>
                                    {m.is_sold}
                                </Card.Text>
                                <Card.Text>
                                    {m.create_at}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    )
}
