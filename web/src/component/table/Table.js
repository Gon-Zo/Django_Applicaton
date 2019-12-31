import React, {useState, useEffect} from "react";
import Loding from "../comm/Loding";

const isNotTemp = (temp) => {
    return temp.length !== 0
};

let json = require('../../assets/data/field');

const renderTHead = (keys) => {
    return (
        <tr>
            {
                keys.map((k, i) => (
                    <th scope="col" key={i}>{json.user[`${k}`]}</th>
                ))
            }
        </tr>
    )
};

const renderTBody = (temp) => {
    return (
        <tr>
            {
                temp.data.map(d => (
                    temp.key.map((k, i) => (
                        <th scope="row" key={i}>{d[`${k}`]}</th>
                    ))
                ))
            }
        </tr>
    )
};

const renderRoding = () => {
    return (
        <Loding/>
    )
};


export default (props) => {
    let temp = props.data;

    if (isNotTemp(temp)) {
        return (
            <table className="table">
                <thead>
                {renderTHead(temp.key)}
                </thead>
                <tbody>
                {renderTBody(temp)}
                </tbody>
            </table>
        )
    } else {
        return (renderRoding())
    }
}
