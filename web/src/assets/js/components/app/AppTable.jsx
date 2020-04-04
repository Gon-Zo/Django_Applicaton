import React  from "react";
import {Table,} from "react-bootstrap"
import { useSelector} from 'react-redux'
import Switch from "react-switch";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";
import Spinner from "react-bootstrap/Spinner";
import {AppReversTheme} from "../../modules/static/support";

export default (props) => {

    let payload = props.data
    let keys = props.keys

    let initUser = useSelector(state => state.userReducer, []);

    let _clickCol = props.click
    let _isChange = props.switch

    if (typeof payload == 'undefined' || payload.length == 0) {
        return (
            <Spinner animation="border" role="status" variant={AppReversTheme}>
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    }

    let theme = initUser.isTheme

    let _checkToValue = (val, idx) => {
        if (typeof val === "boolean") {
            return (
                <Switch height={24}
                        onChange={() => {
                            _isChange(idx, !val)
                        }}
                        onColor={theme ? "#1976d2" : "#BB86FC"}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        checked={val}/>
            )
        }
        return (
            <>
                {val}
            </>
        )
    }

    return (
        <div className="row">
            <div className="col min-hg">
                <Table striped bordered hover size="sm" variant={theme ? "light" : "dark"}>
                    <thead>
                    <tr>
                        <th>#</th>
                        {
                            keys.map((k, i) =>
                                <th key={i}>{k}</th>
                            )
                        }
                        <th>Action</th>
                    </tr>
                    </thead>
                    {/*thead end*/}
                    <tbody>
                        {
                            payload.map((d, i) => (
                                // <tr key={i} onClick={() => _clickCol(i)}>
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    {
                                        keys.map((k, j) => (
                                            <td key={j}>
                                                {_checkToValue(d[`${k}`], i)}
                                                {/*<b>{d[`${k}`]}</b>*/}
                                            </td>
                                        ))
                                    }
                                    <td>
                                        <button>
                                            <FontAwesomeIcon icon={icon.faEdit}/>
                                        </button>
                                        <button>
                                            <FontAwesomeIcon icon={icon.faTrashAlt}/>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    {/*tbody end*/}
                </Table>
            </div>
        </div>
    )
}
