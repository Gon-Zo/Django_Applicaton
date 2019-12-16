import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as fa from '@fortawesome/free-solid-svg-icons'

let data = [
    {title: 'Product Category 1'},
    {title: 'Product Category 2'},
    {title: 'Product Category 3'},
    {title: 'Product Category 4'},
    {title: 'Product Category 5'},
];

const setTableItem = function (item, idx) {

    return (
        <tr key={idx}>
            <td className="tm-product-name">{item.title}</td>
            <td className="text-center">
                <a href="#" className="tm-product-delete-link">
                    <FontAwesomeIcon icon={fa.faTrashAlt} size="2x" className="tm-product-delete-icon"/>
                </a>
            </td>
        </tr>
    )
};

export default () => {
    let items = data;
    return (
        <table className="table tm-table-small tm-product-table">
            <tbody>
            {
                items.map((item, i) => setTableItem(item, i))
            }
            </tbody>
        </table>

    )
}
