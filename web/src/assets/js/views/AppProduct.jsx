import React, {useEffect, useState} from "react";
import {Container, Modal} from "react-bootstrap";
import {$httpProduct, $isOpen, $setMethod, $setProduct} from '../modules/api/product'
import {useDispatch, useSelector} from "react-redux";
import AppProductGroup from "../components/app/AppProductGroup";
import AppName from '../modules/static/name'
import {Product} from "../modules/data/AppDto";

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default () => {

    let dispatch = useDispatch();
    let initProd = useSelector(state => state.productReducer, []);

    useEffect(() => {
        $httpProduct(dispatch);
    }, []);

    let $onClick = () => {
        $setMethod(dispatch, 'I');
        $setProduct(dispatch, new Product());
        $isOpen(dispatch)
    }

    return (
        <Container fluid={true}>

            <div className="text-right">
                <button className="btn btn-default btn-dark" onClick={$onClick}>등록</button>
            </div>

            <ProductEditor isOpen={initProd.isOpen}
                           dispatch={dispatch}
                           data={initProd.product}/>

            <AppProductGroup data={initProd.products.data}/>

        </Container>
    )
}

function ProductEditor(props) {

    let dispatch = props.dispatch;
    let isOpen = props.isOpen;
    let data = props.data;
    let keys = AppName.sortProduct().filter(f => f !== 'create_at');

    let $onClick = () => {
    };

    let inputType = (key) => {
        if (key === 'birthDate') {
            return 'date'
        } else if (key === 'isUse') {
            return 'checkbox'
        } else {
            return 'text'
        }
    };

    let $onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === 'isUse') {
            value = e.target.checked
        }
        data[name] = value
    };

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
                    keys.filter((f) => f !== 'seq' && f !== 'createAt').map((k, i) => {
                        let name = AppName.changeNameByProd(k);
                        return k === 'info' ? (
                            <div key={i}>
                                <span>{name}</span>
                                <CKEditor
                                    editor={ ClassicEditor }
                                    data="<p>Hello from CKEditor 5!</p>"
                                    onInit={ editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log( 'Editor is ready to use!', editor );
                                    } }
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        console.log( { event, editor, data } );
                                    } }
                                    onBlur={ ( event, editor ) => {
                                        console.log( 'Blur.', editor );
                                    } }
                                    onFocus={ ( event, editor ) => {
                                        console.log( 'Focus.', editor );
                                    } }
                                />
                            </div>
                        ) : (
                            <div className="input-group" key={i}>
                                <div className="input-group-prepend">
                                       <span className="input-group-text modal-input-box">
                                          {name}
                                         </span>
                                </div>
                                <input type={inputType(k)}
                                       className="form-control"
                                       defaultValue={data[k]}
                                       defaultChecked={data[k]}
                                       name={k}
                                       onChange={$onChange}/>
                            </div>
                        )
                    })
                }
            </Modal.Body>
            <Modal.Footer>
                <button onClick={$onClick} className="btn btn-default btn-dark">Save</button>
            </Modal.Footer>
        </Modal>
    )
}

