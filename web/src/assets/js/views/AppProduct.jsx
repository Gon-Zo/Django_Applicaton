import React, {useEffect} from "react";
import {Container, Row, Col, Card, Button, Modal} from "react-bootstrap";
import {$httpProduct , $isOpen} from '../modules/api/product'
import {useDispatch, useSelector} from "react-redux";


function ProductModal(props) {
 let initData = props.initData
 let dispatch = props.dispatch
 return(
     <Modal
         size="lg"
         show={initData.isOpen}
         onHide={() => $isOpen(dispatch)}
         aria-labelledby="example-modal-sizes-title-lg">
         <Modal.Header closeButton>
             <Modal.Title id="example-modal-sizes-title-lg">
                상품 등록
             </Modal.Title>
         </Modal.Header>
         <Modal.Body>
             <div className="input-group" >
                 <div className="input-group-prepend">
                     <span className="input-group-text modal-input-box" id="">test</span>
                 </div>
                 <input type={"text"} className="form-control"
                        name={"test"}/>
             </div>
         </Modal.Body>
     </Modal>
 )
}


export default () => {

    let dispatch = useDispatch();
    let initProd = useSelector(state => state.productReducer, []);

    useEffect(() => {
        $httpProduct(dispatch);
    }, [])

    let $isModalByProd = () => {
        $isOpen(dispatch)
    }

    return (
        <Container fluid={true}>
            <Row>
                <Col xs={6} md={4}>
                    <div>
                        <span>Category</span>
                    </div>
                </Col>
                <Col xs={12} md={8} className="box-test test-wrap">
                    <ProductModal initData={initProd} dispatch={dispatch}/>
                    <div className="title-wrap">
                        <h4 className="page-title">상품 목록</h4>
                        <button className="btn-default btn-success" onClick={() => $isModalByProd()}>상품 등록</button>
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
