import React, {useState, useEffect, Fragment} from "react";
import {Table,} from "react-bootstrap"

let $undefinedData = (data) => {
    if (typeof data == 'undefined') {
        return (
            <div>
                <span>로딩중</span>
            </div>
        )
    }
}

export default (props) => {

    let test = props.data

    const onClick = (idx) => {
        console.log(JSON.stringify(test[idx]))
    }

    if (typeof test == 'undefined') {
        return (
            <div>
                <span>로딩중</span>
            </div>
        )
    }

    let keys = new Array();
    let data = test;

    keys = Object.keys(test[0])

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
                        <tr key={i} onClick={() => onClick(i)}>
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
}
