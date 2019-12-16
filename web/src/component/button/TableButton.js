import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default (props) => {
    return (
        <button className="tm-product-delete-link none_border" onClick={props.onClick}>
            {/*<i className="far fa-trash-alt tm-product-delete-icon"></i>*/}
            <FontAwesomeIcon icon={props.icon} size="2x" className="tm-product-delete-icon"/>
        </button>
    )
}
