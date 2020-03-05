// todo : fetch to change ...
import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import AppTable from "../components/app/AppTable";
import {ListDto, UserDto} from "../dto/AppDto";
import AppPagination from "../components/app/AppPagination";
import {useSelector, useDispatch} from "react-redux";
import {onUser} from "../modules/reducer/user";
import axios from 'axios'
import {$fetchUsers , $isOpen , $fetchUpdateToUser} from '../modules/api/user'

/**
 * user modal
 * @param props
 * @returns {null|*}
 * @constructor
 */
function UserModal(props) {

    let isOpen = props.isOpen
    let dispatch = props.dispatch

    if (isOpen) {

        let initData = props.initData
        let userData = initData.user
        let $onClose = () => {
           $isOpen(dispatch)
        }

        let $onChange = (e) => {
            let name = e.target.name
            let value = e.target.value
            if (name === 'isUse') {
                value = e.target.checked
            }
            userData[name] = value
        }

        let keys = Object.keys(userData)

        let inputType = (key) => {
            if (key === 'birthDate') {
                return 'date'
            } else if (key === 'isUse') {
                return 'checkbox'
            } else {
                return 'text'
            }
        }

        let $fetchUpdate = () => {
            $fetchUpdateToUser(dispatch , initData)
        }

        return (
            <div className="modal modal-isOpen" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">유저 정보 수정</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                    onClick={() => $onClose()}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {
                                keys.filter((f) => f !== 'seq' && f !== 'createAt').map((m, i) => (
                                    <div className="input-group" key={i}>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text modal-input-box" id="">{m}</span>
                                        </div>
                                        <input type={inputType(m)} className="form-control" defaultValue={userData[m]} defaultChecked={userData[m]}
                                               name={m}
                                               onChange={$onChange}/>
                                    </div>
                                ))
                            }
                        </div>
                        {/*.modal-body end*/}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={() => $fetchUpdate()}>Save
                                changes
                            </button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal"
                                    onClick={() => $onClose()}>Close
                            </button>
                        </div>
                    </div>
                    {/*.modal-foot end*/}
                </div>
            </div>
        )
    }

    return null;
}

function AppUser() {

    let dispatch = useDispatch()
    let initUser = useSelector(state => state.userReducer, []);

    const $bindData = () => {
        let payload = initUser.users
        let count = payload.count;
        let numPage = payload.numPages;
        let data = undefined
        if (typeof payload.data !== 'undefined') {
            data = payload.data.map((m) =>
                new UserDto(m.seq, m.id, m.pwd, m.name, m.birthDate, m.address, m.type, m.is_use, m.create_at))
        }
        return new ListDto(count, numPage, data)
    }

    useEffect(() => {
        $fetchUsers(dispatch, initUser)
    }, [])

    return (
        <Container fluid={true}>
            <UserModal isOpen={initUser.isOpen} dispatch={dispatch} initData={initUser}/>
            <div className="content-wrap">
                <div>
                    <h4 className="page-title">유저 목록</h4>
                </div>
                <AppTable data={$bindData().data}/>
                <AppPagination count={$bindData().count} numPage={$bindData().numPage}/>
            </div>
        </Container>
    )
}


export default AppUser
