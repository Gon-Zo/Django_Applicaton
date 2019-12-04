import React, {useState} from 'react'

import {
    Link
} from "react-router-dom";
import {Box} from "@material-ui/core";

const Info = () => {
    return 'Test'
};

const getMenu = () => {

    let test2 = Info();

    return (
        <Box component="div" className="test">

            {/*<div className="row">*/}
            {/*    <div className="row">*/}

            {/*    </div>*/}
            {/*    <div className="row">*/}

            {/*    </div>*/}
            {/*</div>*/}

            {/* Market Profile */}


            {/* To use List */}
            <Box component="div" className="sidebar_custom">
                <ul>
                    <li><Link to="/Main"><Box component="span">Main</Box></Link></li>
                    <li><Link to="/User"><Box component="span">User</Box></Link></li>
                </ul>
            </Box>
            {/*  // Side Menu end*/}
        </Box>
    )
};

export default getMenu


