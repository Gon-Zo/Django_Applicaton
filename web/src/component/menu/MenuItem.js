import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';


export default (props) => {
    return (
        <li className="nav-item">
            {/*<a className="nav-link active" href="#">*/}
            <Link className="nav-link " to={props.url}>
                {/*<i className="fas fa-tachometer-alt"></i>*/}
                <FontAwesomeIcon icon={props.icon} size="2x"/>
                {props.title}
                <span className="sr-only">(current)</span>
            </Link>
        </li>

    )
};

