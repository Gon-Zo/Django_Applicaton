import React from "react";

function LoginView(props) {
    return (
        <div>
           <span>로딩중</span>
        </div>
    )
}


let catchLogin = (data) =>{
    console.log("data" , data)
    if(data == null){
       return(
           <LoginView/>
       )
    }
}

export {catchLogin}
