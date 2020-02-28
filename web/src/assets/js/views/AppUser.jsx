import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import AppTable from "../components/app/AppTable";
import {ListDto, UserDto} from "../dto/AppDto";
import AppPagination from "../components/app/AppPagination";
import {useSelector, useDispatch} from "react-redux";
import {onUser} from "../modules/user";
import axios from 'axios'

function userModal() {
    return (
        <div className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Save changes</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
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
        axios.get(`http://localhost:3030/api/admin/user?type=U`, {
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

            <div className="content-wrap">
                <div>
                    <h4 className="page-title">유저 목록</h4>
                    <span>{JSON.stringify(isOpen)}</span>
                </div>
                <AppTable isOpen={isOpen} setIsOpen={$setIsOpen} data={user.data.data}/>
                <AppPagination fetchUser={fetchUser} count={user.data.count} numPage={user.data.numPage}/>
            </div>

        </Container>
    )
}


export default AppUser
