// todo : fetch to change ...
import React, {useEffect, useState} from "react";
import Table from "../components/app/Table";
import {useSelector, useDispatch} from "react-redux";
import {$fetchUsers, $isUserModalOpen, $setUser} from '../modules/api/user'
import {UserInfoModal} from "../components/app/AppModal";
import Pagination from "../components/app/Pagination";
import { UserDto} from "../modules/data/AppDto";

export default () => {

    let dispatch = useDispatch()
    let initUser = useSelector(state => state.userReducer, []);

    useEffect(() => {
        $fetchUsers(dispatch, initUser)
    }, []);

    let _onReFresh = (val) => {
        initUser.page = val
        $fetchUsers(dispatch, initUser)
    }

    let _bindData = () => {
        let payload = initUser.users;
        let count = payload.count;
        let numPages = payload.numPages;
        let data = undefined
        let keys = []

        if (typeof payload.data !== 'undefined') {
            data = payload.data.map((m) =>
                new UserDto(m.seq, m.id, m.pwd, m.name, m.birthDate, m.address, m.type, m.is_use, m.create_at))

            keys = Object.keys(data[0]).filter(f=>f!=='seq')
        }
        // return new ListDto(count, numPages, data)
        return {
            count: count,
            numPages: numPages,
            data: data,
            key: keys
        }
    }

    let _clickToCol = (idx) =>{
        $setUser(dispatch, _bindData().data[idx]);
        $isUserModalOpen(dispatch)
    }

    let _isUse = (flag) => {

    }

    return (
        <div className="container-main">
            <UserInfoModal initData={initUser} dispatch={dispatch}/>

            <div className="card-group">
                <div className="card card-user  card-bg"></div>
                <div className="card card-user  card-bg"></div>
                <div className="card card-user  card-bg"></div>
            </div>

            <div className="mt-4">
                <Table data={_bindData().data}
                          switch={_isUse}
                          keys={_bindData().key}
                />
                <Pagination count={_bindData().count}
                            numPages={_bindData().numPages}
                            refresh={_onReFresh}
                            page={initUser.page}/>
            </div>
    </div>
    )
}


