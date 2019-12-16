import React from 'react'
import ProductTable from "../component/table/ProductTable";
import ProductButton from "../component/button/ProductButton";
import CategoryTable from "../component/table/CategoryTable";
import {Link} from "react-router-dom";


export default () => {
    return (
        <div className="container mt-5">
            <div className="row tm-content-row">

                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 tm-block-col">
                    <div className="tm-bg-primary-dark tm-block tm-block-products">

                        <ProductTable/>
                        {/*// <!-- table container -->*/}

                        {/*<a*/}
                        {/*    href="add-product.html"*/}
                        {/*    className="btn btn-primary btn-block text-uppercase mb-3">Add new product</a>*/}

                        {/*<ProductButton title={"Add new product"} onClick={()=>{alert("test success 3")}}/>*/}

                        <Link to="/add-product" className="btn btn-primary btn-block text-uppercase mb-3">Add new
                            product</Link>

                        <ProductButton title={"Delete selected products"} onClick={() => {
                            alert("test success1")
                        }}/>

                        {/*<button className="btn btn-primary btn-block text-uppercase">*/}
                        {/*    Delete selected products*/}
                        {/*</button>*/}

                    </div>
                </div>
                {/* Product Wrap end*/}

                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-block-col">
                    <div className="tm-bg-primary-dark tm-block tm-block-product-categories">
                        <h2 className="tm-block-title">Product Categories</h2>

                        <div className="tm-product-table-container">
                            <CategoryTable/>
                        </div>

                        {/*// <!-- table container -->*/}
                        {/*<button className="btn btn-primary btn-block text-uppercase mb-3">*/}
                        {/*    Add new category*/}
                        {/*</button>*/}

                        <Link to="/add-category"
                              className="btn btn-primary btn-block text-uppercase mb-3">Add new category</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
