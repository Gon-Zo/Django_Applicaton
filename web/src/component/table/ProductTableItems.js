import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as fa from '@fortawesome/free-solid-svg-icons'
import TableButton from "../button/TableButton";

let data = [
    {title: 'Lorem Ipsum Product 1', unitSold: '1,450', inStock: 550, expireDate: '28 March 2019'}
];

const setItem = function (data, idx) {
    return (
        <tr key={idx}>
            <th scope="row"><input type="checkbox"/></th>
            <td className="tm-product-name">{data.title}</td>
            <td>{data.unitSold}</td>
            <td>{data.inStock}</td>
            <td>{data.expireDate}</td>

            <td>
                <a href="#" className="tm-product-delete-link">
                    {/*<i className="far fa-trash-alt tm-product-delete-icon"></i>*/}
                    <FontAwesomeIcon icon={fa.faPen} size="2x" className="tm-product-delete-icon"/>
                </a>
            </td>

            <td>
                <TableButton icon={fa.faTrashAlt} onClick={()=>{
                    alert("test success >> IDX :" + idx)
                }}/>
            </td>

        </tr>
    )
};

const getItems = function (items) {
    return items.map((item, i) => setItem(item, i))
};

export default () => {
    let item = data;
    return getItems(item);
}
