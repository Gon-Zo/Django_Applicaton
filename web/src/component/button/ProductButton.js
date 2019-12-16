import React, {useState} from 'react'

export default (props)=>{
    return(
        <button className="btn btn-primary btn-block text-uppercase" onClick={props.onClick}>
            {props.title}
        </button>
    )
}
