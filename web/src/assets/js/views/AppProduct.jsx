import React, {useEffect} from "react";
import {Button, Container } from "react-bootstrap";
import {$httpProduct, $isOpen, $setMethod, $setProduct  } from '../modules/api/product'
import {useDispatch, useSelector} from "react-redux";
import AppProductGroup from "../components/app/AppProductGroup";
import {Product} from "../modules/data/AppDto";
import { ProductEditor} from "../components/app/AppModal";
import {AppTheme} from "../modules/static/support";

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

    return (
        <Container fluid={true}>

            <div className="text-right p-3">
                <Button variant={AppTheme()} className="ml-2" onClick={$onClick}>등록</Button>
            </div>

            <ProductEditor isOpen={initProd.isOpen}
                           dispatch={dispatch}
                           data={initProd}/>

            <AppProductGroup data={initProd.products.data}/>

            {/*<AppPagination count={initProd.products.count} numPage={initProd.products.numPage} page={initProd.page}/>*/}
        </Container>
    )
}

