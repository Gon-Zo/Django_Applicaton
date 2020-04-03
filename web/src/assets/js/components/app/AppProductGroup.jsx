import React, {Fragment} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as icon from "@fortawesome/free-solid-svg-icons";
import {Table} from "react-bootstrap";
import {$isOpen, $setMethod, $setIsSold, $deleteByProd, $setProduct} from "../../modules/api/product";
import {useDispatch, useSelector} from "react-redux";
import Switch from "react-switch";

export default (props) => {

    let initUser = useSelector(state => state.userReducer, []);
    let theme = initUser.isTheme
    let data = props.data;
    let dispatch = useDispatch();

    if (typeof data == 'undefined') {
        return (
            <div>
                <span>Loging</span>
            </div>
        )
    }

    let keys = Object
        .keys(data[0])
        .filter(f => f !== 'store' && f !== 'seq' && f !== 'info')

    let $onEdit = (idx) => {
        $setMethod(dispatch, 'U');
        $setProduct(dispatch, data[idx]);
        $isOpen(dispatch)
    };

    let $onDelete = (idx) => {
        let deleteNo = data[idx].seq;
        $deleteByProd(dispatch, deleteNo)
    };

    let test = (val , idx)=>{
        if (typeof val == 'boolean') {
            return (
                <Switch height={24}
                        onChange={()=>{
                            $setIsSold(dispatch, idx, !val)
                        }}
                        onColor={ theme ? "#1976d2" : "#BB86FC" }
                        // onHandleColor="#f00"
                        checkedIcon={false}
                        uncheckedIcon={false}
                        checked={val}/>
            )
        }else{
            return (
                <>
                    {val}
                </>
            )
        }
    }

    return (
        <Table striped bordered hover variant={initUser.isTheme ? "light" : "dark"}>
            <thead>
            <tr>
                <th>#</th>
                {
                    keys.map((m, i) => (
                        <th key={i}>{m}</th>
                    ))
                }
                <th>Action</th>
            </tr>

            </thead>
            <tbody>
            {
                data.map((d, i) => (
                    <tr key={i}>
                        <td>{i + 1}</td>
                        {
                            keys.map((k, n) => (
                                <td key={n}>{
                                   test(d[k] , i)
                                }</td>
                            ))
                        }
                        <td>
                            <button onClick={() => $onEdit(i)}>
                                <FontAwesomeIcon icon={icon.faEdit}/>
                            </button>
                            <button onClick={() => $onDelete(i)}>
                                <FontAwesomeIcon icon={icon.faTrashAlt}/>
                            </button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    )
}
