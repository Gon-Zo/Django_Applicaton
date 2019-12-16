import React, {useState} from 'react'
import ProductTableItems from "./ProductTableItems";

export default () => {
    return (
        <div className="tm-product-table-container">
            <table className="table table-hover tm-table-small tm-product-table">
                <thead>
                <tr>
                    <th scope="col">&nbsp;</th>
                    <th scope="col">PRODUCT NAME</th>
                    <th scope="col">UNIT SOLD</th>
                    <th scope="col">IN STOCK</th>
                    <th scope="col">EXPIRE DATE</th>
                    <th scope="col">&nbsp;</th>
                    <th scope="col">&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                <ProductTableItems/>
                {/* // ProductTableItems end */}
                </tbody>
            </table>
        </div>
    )
}
