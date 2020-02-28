import React, {useState, useEffect, Fragment} from "react";
import {Table,} from "react-bootstrap"

export default (props) => {

    let data = props.data
    let isOpen = props.isOpen
    let $setIsOpen = props.setIsOpen;

    if (typeof data == 'undefined') {
        return (
            <div>
                <span>로딩중</span>
            </div>
        )
    }

    function $onTest() {
        $setIsOpen(!isOpen)
    }

    return (
        <div className="row">
            <div className="col min-hg">
                {renderTable(data, $onTest)}
            </div>
        </div>
    )
}

/**
 * Table 랜더링
 * @param data 테이블 데이터
 * @returns {*}
 */
const renderTable = (data, setIsOpen) => {

    let keys = Object.keys(data[0])

    const $onClick = (idx) => {
        console.log(JSON.stringify(data[idx]))
        setIsOpen()
    }

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
            {/*thead end*/}
            <tbody>
            <Fragment>
                {
                    data.map((d, i) => (
                        <tr key={i} onClick={() => $onClick(i)}>
                            {
                                keys.map((k, i) => (
                                    <td key={i}>
                                        <b>{$checkToValue(d[`${k}`])}</b>
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </Fragment>
            </tbody>
            {/*tbody end*/}
        </Table>
    )

}

let renderInput = (data) => {
    return (
        <input type="checkbox" defaultChecked={data} disabled={true}/>
    )
}

let $checkToValue = (val) => {
    if (typeof val === "boolean") {
        val = renderInput(val)
    }
    return val
}
