// todo : fetch to change ...
import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import AppTable from "../components/app/AppTable";
import {ListDto, UserDto} from "../modules/data/AppDto";
import AppPagination from "../components/app/AppPagination";
import {useSelector, useDispatch} from "react-redux";
import {$fetchUsers  , $updateUser} from '../modules/api/user'
import {UserInfoModal} from "../components/app/AppModal";

function AppUser() {

    let dispatch = useDispatch()
    let initUser = useSelector(state => state.userReducer, []);

    const $bindData = () => {
        let payload = initUser.users;
        let count = payload.count;
        let numPage = payload.numPages;
        let data = undefined
        if (typeof payload.data !== 'undefined') {
            data = payload.data.map((m) =>
                new UserDto(m.seq, m.id, m.pwd, m.name, m.birthDate, m.address, m.type, m.is_use, m.create_at))
        }
        return new ListDto(count, numPage, data)
    };

    useEffect(() => {
        $fetchUsers(dispatch, initUser)
    }, []);

    return (
        <Container fluid={true}>
            <UserInfoModal initData={initUser} dispatch={dispatch}/>
            <div className="card-group">
                <div className="card card-user card-test card-bg"></div>
                <div className="card card-user card-test card-bg"></div>
                <div className="card card-user card-test card-bg"></div>
            </div>
            <div className="mt-4">
                <AppTable data={$bindData().data}/>
                <AppPagination count={$bindData().count} numPage={$bindData().numPage}/>
            </div>
            {/* table wrap end*/}
        </Container>
    )
}


export default AppUser
