import React, {useState, useEffect, Fragment} from "react";
import {Table,} from "react-bootstrap"
import {useDispatch, useSelector} from 'react-redux'
import {$setUser , $isUserModalOpen} from "../../modules/api/user";

export default (props) => {

    let dispatch = useDispatch()
    let data = props.data
    let initUser = useSelector(state => state.userReducer, []);

    if (typeof data == 'undefined') {
        return (
            <div>
                <span>로딩중</span>
            </div>
        )
    }

    return (
        <div className="row">
            <div className="col min-hg">
                {renderTable(data, dispatch , initUser.isTheme)}
            </div>
        </div>
    )
}

/**
 * Table 랜더링
 * @param data 테이블 데이터
 * @returns {*}
 */
const renderTable = (data, dispatch , isTheme) => {

    let keys = Object.keys(data[0]);

    const $onClick = (idx) => {
        $setUser(dispatch, data[idx]);
        $isUserModalOpen(dispatch)
    };


    return (
        <Table striped bordered hover variant={isTheme ? "light" : "dark"}>
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
        <input type="checkbox" defaultChecked={data === true} defaultValue={data} disabled={true}/>
    )
}

let $checkToValue = (val) => {
    if (typeof val === "boolean") {
        val = renderInput(val)
    }
    return val
}
