import React, {useState, useEffect, Fragment} from "react";
import Loding from "../comm/Loding";

const isNotTemp = (temp) => {
    return temp.length !== 0
};

let json = require('../../assets/data/field');

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
                <tr>
                    {
                        temp.key.map((k, i) => (
                            <th scope="col" key={i}>{json.user[`${k}`]}</th>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                <Fragment>
                    {
                        temp.data.map((d, i) => (
                            <tr key={i}>
                                {
                                    temp.key.map((k, i) => (
                                        <td key={i}>
                                            <b>{d[`${k}`]}</b>
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </Fragment>
                </tbody>
            </table>
        )
    } else {
        return (renderRoding())
    }
}
