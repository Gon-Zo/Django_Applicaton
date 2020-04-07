// todo : fetch to change ...

import React, {useEffect, useState} from "react";
import Table from "../components/app/Table";
import {useSelector, useDispatch} from "react-redux";
import {$deleteUser, $fetchUsers, $isUserModalOpen, $setUser} from '../modules/api/user'
import {UserInfoModal} from "../components/app/AppModal";
import Pagination from "../components/app/Pagination";
import { UserDto} from "../modules/data/AppDto";
import LineChart from "../components/chart/LineChart";
import BarChart from "../components/chart/BarChart";

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

    let _isUse = (idx , flag) => {
        let data = initUser.users.data[idx]
        console.log('_isUse', JSON.stringify(data))
        // $isUse(dispatch, idx , data , flag )
    }

    let _onEdit = () => {

    }

    let _onDelete = (idx) => {
        let seq = initUser.users.data[idx].seq;
        $deleteUser(dispatch, {idx: seq, data: initUser})
    }

    return (
        <div className="container-main">
            <UserInfoModal initData={initUser} dispatch={dispatch}/>

            <div className="card-group">
                <div className="card card-user card-bg">
                   <div className="card-title ml-2 mt-1">
                      <span className="main-ft">사용자 추이</span>
                   </div>
                    <div className="card-body">
                        <LineChart/>
                    </div>
                </div>
                <div className="card card-user card-bg">
                    <div className="card-title ml-2 mt-1">
                        <span className="main-ft">사용자 추이</span>
                    </div>
                    <div className="card-body">
                        <BarChart/>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <Table data={_bindData().data}
                          switch={_isUse}
                          keys={_bindData().key}
                          update={_onEdit}
                          delete={_onDelete}
                />
                <Pagination count={_bindData().count}
                            numPages={_bindData().numPages}
                            refresh={_onReFresh}
                            page={initUser.page}/>
            </div>
    </div>
    )
}
