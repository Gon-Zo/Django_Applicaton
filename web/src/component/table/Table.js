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

        let data = temp.data.data
        let keys = Object.keys(data[0])

        let test = (e) => {
            let k = e.target.key
            console.log(k)
            // console.log(JSON.stringify(e.target.index))
            // alert(" test success...  >> " + idx)
            // console.log("test ...")
        };

        return (
            <table className="table">
                <thead>
                <tr>
                    {
                        keys.map((k, i) => (
                            <th scope="col" key={i}>{json.user[`${k}`]}</th>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                <Fragment>
                    {
                        data.map((d, i) => (
                            <tr key={i} onClick={test}>
                                {
                                    keys.map((k, i) => (
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
