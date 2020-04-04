import React, {useEffect} from "react";
import {Button} from "react-bootstrap";
import {$httpProduct, $isOpen, $setIsSold, $setMethod, $setProduct} from '../modules/api/product'
import {useDispatch, useSelector} from "react-redux";
import { Product} from "../modules/data/AppDto";
import { ProductEditor} from "../components/app/AppModal";
import {AppTheme} from "../modules/static/support";
import Pagination from "../components/app/Pagination";
import AppTable from "../components/app/AppTable";

export default () => {

    let dispatch = useDispatch();
    let initProd = useSelector(state => state.productReducer, []);

    useEffect(() => {
        $httpProduct(dispatch, initProd);
    }, []);

    let $onClick = () => {
        $setMethod(dispatch, 'I');
        $setProduct(dispatch, new Product());
        $isOpen(dispatch)
    };

    let _onReFresh = (val) =>{
        initProd.page = val
        $httpProduct(dispatch, initProd);
    }

    let _isSold = (idx, flag) => {
        let data = initProd.products.data
        $setIsSold(dispatch, data[idx], idx, flag)
    }

    let _bindData = () =>{
        let payload = initProd.products;
        let count = payload.count;
        let numPages = payload.numPages;
        let result = []
        let keys = []

        if (typeof payload.data !== 'undefined') {
            keys = Object
                .keys(payload.data[0])
                .filter(f => f != 'store' && f != 'info' && f != 'seq' && f != 'create_at')
            payload.data
                .forEach(m => {
                    let temp = {}
                    keys.forEach(f => {
                        temp[f] = m[f]
                    })
                    result.push(temp)
                })
        }

        return {
            count : count ,
            numPages : numPages ,
            data : result ,
            keys : keys
        }
    }

    return (
        <div className="container-main">
            <div className="text-right p-3">
                <Button variant={AppTheme()} className="ml-2" onClick={$onClick}>등록</Button>
            </div>

            <ProductEditor isOpen={initProd.isOpen}
                           dispatch={dispatch}
                           data={initProd}/>

            <AppTable data={_bindData().data}
                      keys={_bindData().keys}
                      switch={_isSold}/>

            {/*<AppProductGroup data={initProd.products.data}/>*/}

            <Pagination count={initProd.products.count}
                        numPages={initProd.products.numPages}
                        refresh={_onReFresh}
                        page={initProd.page}/>
        </div>
    )
}
