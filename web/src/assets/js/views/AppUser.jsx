import React, {useState, useEffect} from "react";
import {Container, Pagination} from "react-bootstrap";
import AppTable from "../components/app/AppTable";
import axios from 'axios'
import {ListDto, UserDto} from "../dto/AppDto";
import AppPagination from "../components/app/AppPagination";
import {useSelector, useDispatch} from "react-redux";
import {onUser} from "../modules/user/login";

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


    const fetchUser = async () => {
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


    return (
        <Container fluid={true}>
            <div>
                <span>UserApp</span>
            </div>
            <AppTable data={user.data.data}/>
            <div>
                <AppPagination fetchUser={fetchUser} count={user.data.count} numPage={user.data.numPage}/>
            </div>

        </Container>
    )
}


export default AppUser
