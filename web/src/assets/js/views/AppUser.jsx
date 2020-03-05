// todo : fetch to change ...
import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import AppTable from "../components/app/AppTable";
import {ListDto, UserDto} from "../dto/AppDto";
import AppPagination from "../components/app/AppPagination";
import {useSelector, useDispatch} from "react-redux";
import {onUser} from "../modules/user";
import axios from 'axios'
import {$fetchUsers} from '../modules/api/user'

/**
 * user modal
 * @param props
 * @returns {null|*}
 * @constructor
 */
function UserModal(props) {

    let isOpen = props.isOpen
    let setIsOpen = props.setIsOpen

    if (isOpen) {

        let userData = props.userData

        let $onClose = () => {
            setIsOpen(!isOpen)
        }

        let $onChange = (e) => {
            let name = e.target.name
            let value = e.target.value
            if (name === 'isUse') {
                value = Boolean(value)
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
            let seq = userData.seq
            userData['is_use'] = userData.isUse
            delete userData.seq
            delete userData.isUse
            delete userData.createAt
            axios.put(`/admin/user/${seq}`, userData)
                .then((res) => $onClose())
                .catch((err) => console.log(err))
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
                                        <input type={inputType(m)} className="form-control" defaultValue={userData[m]}
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
    let [isOpen, setIsOpen] = useState(false)

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
        // fetchUser()
    }, [])

    function $setIsOpen(v) {
        setIsOpen(v)
        if (v === false) {
            // fetchUser()
        }
    }

    // const fetchUser = () => {
    //     axios.get(`/admin/user`, {
    //         params: {
    //             type: 'U',
    //             page: user.clickPage
    //         }
    //     }).then((res) => {
    //         $bindData(res.data)
    //     }).catch((err) => console.log(err))
    // }

    return (
        <Container fluid={true}>
            <UserModal isOpen={isOpen} setIsOpen={$setIsOpen} userData={initUser.user}/>
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
