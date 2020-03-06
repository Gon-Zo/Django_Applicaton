import React, {useEffect, useState, Fragment} from "react";
import {Container, Row, Col, Card, Button, Modal, Table} from "react-bootstrap";
import {$httpProduct, $isOpen, $setMethod} from '../modules/api/product'
import {useDispatch, useSelector} from "react-redux";
import AppProductGroup from "../components/app/AppProductGroup";
import {Product} from "../dto/AppDto";
import {Editor, EditorState} from 'draft-js'

function ProductEditor(props) {
    let initData = props.initData
    let dispatch = props.dispatch
    const [editorState, setEditorState] = React.useState(
        EditorState.createEmpty(),
    );

    let $onClick = () => {
        console.log(JSON.stringify(editorState))
    }

    return (
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
                <Editor editorState={editorState} onChange={setEditorState}/>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={() => $onClick()} className="btn btn-default btn-dark">Save</button>
            </Modal.Footer>
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
        $setMethod(dispatch, 'I')
    }

    let data = initProd.products.data

    if (typeof data === 'undefined') {
        return (
            <div>
                <span>로딩중</span>
            </div>
        )
    }

    let keys = Object.keys(data[0]).filter(f=>f != 'store' && f != 'seq')



    return (
        <Container fluid={true}>

            <div className="title-wrap">
                <h4 className="page-title">상품 목록</h4>
            </div>

            <Table striped bordered hover>
                <thead>

                <tr>
                    <th>#</th>
                    {
                        keys.map((m, i) => (
                            <th key={i}>{m}</th>
                        ))
                    }
                </tr>

                </thead>
                <tbody>
                    {
                        data.map((d, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                {
                                    keys.map((k, n) => (
                                        <td key={n}>{test(d[k])}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    )
}

let test = (data) => {
    if (typeof data === 'boolean') {
        return (
            <label className="switch">
                {/*<input type="checkbox" checked/>*/}
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>

        )
    }
    return data
}


