import React , {useEffect} from "react";
import {Container} from "react-bootstrap";
import {$httpStore} from "../modules/api/setting";
import {useDispatch} from "react-redux";

export default () => {

    let dispatch = useDispatch()

    useEffect(()=>{
       // $httpStore(dispatch)
    } , [])

    return (
        <Container>

        </Container>
    )
}
