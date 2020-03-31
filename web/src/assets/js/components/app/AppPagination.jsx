import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {$fetchUsers , $onPage } from "../../modules/api/user";

export default (props) => {

    const initUser = useSelector(state => state.userReducer, []);
    let dispatch = useDispatch()

    let cnt = props.count;
    let numPage = props.numPage;

    if (typeof numPage == 'undefined') {
        return null
    }

    let temp = new Array();

    for (let i = 0; i < numPage; i++) {
        temp.push(i + 1)
    }

    let $onCLick = (e) => {
        let vl = e.target.text
        $onPage(dispatch , vl)
        $fetchUsers(dispatch , initUser)
    }

    return (

        <div className="row">

            <div className="col">
                <div>
                    <h6 className="pagination-sm-title main-ft">All Items <span>{cnt}</span>
                    </h6>
                </div>
            </div>

            <div className="col">
                <ul className="pagination pagination-wrap">
                    <li className="page-item">
                        <a className="page-link" href="/#/user" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    {
                        temp.map((m, i) => (
                            <li className="page-item" key={i} onClick={$onCLick} data-value={m}>
                                <a className="page-link" href="/#/user">{m}</a>
                            </li>
                        ))
                    }
                    <li className="page-item">
                        <a className="page-link" href="/#/user" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )

}
