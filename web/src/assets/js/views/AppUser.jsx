import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import AppTable from "../components/app/AppTable";
import {ListDto, UserDto} from "../dto/AppDto";
import AppPagination from "../components/app/AppPagination";
import {useSelector, useDispatch} from "react-redux";
import {onUser} from "../modules/user";
import axios from 'axios'

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
            if(name === 'isUse'){
                value = Boolean(value)
            }
            userData[name] = value
        }

        let keys = Object.keys(userData)

        let inputType = (key) => {
            if(key === 'birthDate'){
               return 'date'
            }else if(key === 'isUse'){
                return 'checkbox'
            }else{
                return 'text'
            }
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
                            <button type="button" className="btn btn-primary">Save changes</button>
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

    const $bindData = (playData) => {
        let count = playData.count;
        let numPage = playData.numPages;
        let data = playData.data.map((m) => new UserDto(m.seq, m.id, m.pwd, m.name, m.birthDate, m.address, m.type, m.is_use, m.create_at))
        let obj = new ListDto(count, numPage, data)
        dispatch(onUser(obj))
    }

    const user = useSelector(state => state.appUser, []);

    const fetchUser = () => {
        axios.get(`/admin/user`, {
            params: {
                type: 'U',
                page: user.clickPage
            }
        }).then((res) => {
            $bindData(res.data)
        }).catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchUser()
    }, [])

    let [isOpen, setIsOpen] = useState(false)

    function $setIsOpen(v) {
        setIsOpen(v)
    }

    return (
        <Container fluid={true}>
            <UserModal isOpen={isOpen} setIsOpen={$setIsOpen} userData={user.user}/>
            <div className="content-wrap">
                <div>
                    <h4 className="page-title">유저 목록</h4>
                </div>
                <AppTable isOpen={isOpen} setIsOpen={$setIsOpen} data={user.data.data}/>
                <AppPagination fetchUser={fetchUser} count={user.data.count} numPage={user.data.numPage}/>
            </div>

        </Container>
    )
}


export default AppUser
