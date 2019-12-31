import React, {useState, useEffect} from 'react'
import Table from "./Table";
import axios from 'axios'
import {BASE_URL} from "../../assets/comm/base";

export default (props) => {

    let [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(0);

    const bindData = (temp) => {

        let tempList = {
            key: Object.keys(temp[0]),
            data: temp
        };
        setUsers(tempList);
    };


    const axiosUser = () => {
        axios(`${BASE_URL}/api/user`)
            .then((res) => {
                bindData(res.data)
            }).catch((error => console.log(error)))
    };

    useEffect(() => {
        axiosUser()
    }, [userId]);


    return (
        <div className="col-12 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
                <h2 className="tm-block-title text_start">{props.title}</h2>
                <Table data={users}/>
            </div>
        </div>
    )

};
