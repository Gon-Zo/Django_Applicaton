import React, {useEffect, useState , Fragment} from "react";
import {Button, Container, Modal, Table, Form, InputGroup, Col} from "react-bootstrap";
import {$httpProduct, $isOpen, $setMethod, $setProduct , $isOpenToCategory , $httpCategory } from '../modules/api/product'
import {useDispatch, useSelector} from "react-redux";
import AppProductGroup from "../components/app/AppProductGroup";
import {Product} from "../modules/data/AppDto";
import { ProductEditor} from "../components/app/AppModal";

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
    };

    // let $openCategoryModal = () => {
    //     $isOpenToCategory(dispatch)
    // };

    return (
        <Container fluid={true}>

            <div className="text-right p-3">
                {/*<button className="btn btn-default btn-dark" onClick={$openCategoryModal}>카테고리</button>*/}
                <Button variant="dark" className="ml-2" onClick={$onClick}>등록</Button>
            </div>

            {/*<CategoryModal data={initProd} dispatch={dispatch}/>*/}

            <ProductEditor isOpen={initProd.isOpen}
                           dispatch={dispatch}
                           data={initProd}/>

            <AppProductGroup data={initProd.products.data}/>

        </Container>
    )
}

