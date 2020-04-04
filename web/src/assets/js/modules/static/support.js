import {useSelector} from "react-redux";
// import Spinner from "react-bootstrap/Spinner";
// import React from "react";


export const isNotEmpty = (data) => {
    return  typeof data !== "undefined" || data !== null
}

export const AppTheme = () =>{
    let theme = useSelector(state => state.userReducer, []).isTheme
    let str = theme ? "primary" :"dark"
    return str
}

export const AppReversTheme = () => {
    let theme = useSelector(state => state.userReducer, []).isTheme
    let str = theme ? "dark" : "light"
    return str
}

// export const Test = (data) =>{
//     if (typeof data == 'undefined') {
//     console.log("?>")
//         return (
//             <Spinner animation="border" role="status" variant="light">
//                 <span className="sr-only">Loading...</span>
//             </Spinner>
//         )
//     }
// }
