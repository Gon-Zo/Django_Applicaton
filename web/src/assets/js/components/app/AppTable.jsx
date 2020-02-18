import React, {useState, useEffect, Fragment} from "react";
import {Table,} from "react-bootstrap"


const test1 = () => {
    alert("TEST...")
}

export default (props) => {

    // let [data, setData] = useState([])

    let test = props.data

    if (typeof test.data !== 'undefined') {
        let keys = new Array();
        let data = test.data;

        keys = Object.keys(test.data[0])

        return (
            <Table striped bordered hover>
                <thead>
                <tr>
                    {
                        keys.map((k, i) => (
                            <th key={i}>{k}</th>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                <Fragment>
                    {
                        data.map((d, i) => (
                            <tr key={i} onClick={test1}>
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
            </Table>
        )
    } else {
        return (
            <div>
                <span>Loding</span>
            </div>
        )
    }
}
