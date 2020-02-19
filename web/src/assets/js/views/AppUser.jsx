import React, {useState, useEffect} from "react";
import {Container, Pagination} from "react-bootstrap";
import AppTable from "../components/app/AppTable";
import axios from 'axios'
import {ListDto, UserDto} from "../dto/AppDto";
import AppPagination from "../components/app/AppPagination";
import {useSelector} from "react-redux";

function AppUser() {

    let [userList, setUserList] = useState([])

    const $bindData = (playData) => {
        let count = playData.count;
        let numPage = playData.numPages;
        let data = playData.data.map((m) => new UserDto(m.seq, m.id, m.pwd, m.name, m.birthDate, m.address, m.type, m.is_use, m.create_at))
        setUserList(new ListDto(count, numPage, data))
    }

    const user = useSelector(state => state.appUser, []);

    useEffect(() => {

        axios.get(`http://localhost:3030/api/admin/user?type=U`, {
            params: {
                type: 'U',
                page : user.clickPage
            }
        }).then((res) => {
            // console.log(JSON.stringify(res.data))
            $bindData(res.data)
        }).catch((err) => console.log(err))

    }, [])


    return (
        <Container fluid={true}>
            <div>
                <span>UserApp</span>
            </div>
            <AppTable data={userList.data}/>
            <div>
                <AppPagination count={userList.count} numPage={userList.numPage}/>
            </div>

        </Container>
    )
}


export default AppUser
