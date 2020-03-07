import React, {useEffect, useState, Fragment} from "react";
import {Container, Row, Col, Card, Button, Modal, Table} from "react-bootstrap";
import {$httpProduct, $isOpen, $setMethod , $setProduct} from '../modules/api/product'
import {useDispatch, useSelector} from "react-redux";
import {Editor, EditorState} from 'draft-js'
import AppProductGroup from "../components/app/AppProductGroup";
import AppName from '../modules/static/name'

export default () => {

    let dispatch = useDispatch();
    let initProd = useSelector(state => state.productReducer, []);

    useEffect(() => {
        $httpProduct(dispatch);
    }, [])

    return (
        <Container fluid={true}>

            {/*<div className="title-wrap">*/}
            {/*    <h4 className="page-title">상품 목록</h4>*/}
            {/*</div>*/}

            <ProductEditor isOpen={initProd.isOpen}
                           dispatch={dispatch}
                           data={initProd.product}/>

            <AppProductGroup data={initProd.products.data}/>

        </Container>
    )
}


function ProductEditor(props) {

    let dispatch = props.dispatch
    let isOpen = props.isOpen
    let data = props.data
    let keys = Object.keys(data).filter(f=>f!='store')

    const [editorState, setEditorState] = React.useState(
        EditorState.createEmpty(),
    );

    let $onClick = () => {
        // console.log(JSON.stringify(editorState))
    }

    let inputType = (key) => {
        if (key === 'birthDate') {
            return 'date'
        } else if (key === 'isUse') {
            return 'checkbox'
        } else {
            return 'text'
        }
    }

    let $onChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        if (name === 'isUse') {
            value = e.target.checked
        }
        data[name] = value
    }

    return (
        <Modal
            size="lg"
            show={isOpen}
            onHide={() => $isOpen(dispatch)}
            aria-labelledby="example-modal-sizes-title-lg">
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    상품 등록
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    keys.filter((f) => f !== 'seq' && f !== 'createAt').map((m, i) => (
                        <div className="input-group" key={i}>
                            <div className="input-group-prepend">
                                <span className="input-group-text modal-input-box" >
                                    {AppName.changeNameByProd(m)}
                                </span>
                            </div>
                            <input type={inputType(m)}
                                   className="form-control"
                                   defaultValue={data[m]}
                                   defaultChecked={data[m]}
                                   name={m}
                                   onChange={$onChange}/>
                        </div>
                    ))
                }
                {/*<Editor editorState={editorState} onChange={setEditorState}/>*/}
            </Modal.Body>
            <Modal.Footer>
                <button onClick={() => $onClick()} className="btn btn-default btn-dark">Save</button>
            </Modal.Footer>
        </Modal>
    )
}

