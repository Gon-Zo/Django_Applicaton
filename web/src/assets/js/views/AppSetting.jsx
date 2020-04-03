import React from "react";

import {Tab, ListGroup, Col , Row } from "react-bootstrap";
import {useSelector} from "react-redux";

export default ()=>{

    let initUser = useSelector(state => state.userReducer, []);

    let theme = initUser.isTheme ? "primary" : "dark";

    return (
        <div className="mt-2 ml-2">
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">

                <ListGroup bg={theme} horizontal>
                    <ListGroup.Item variant={theme} href="#link1">배너</ListGroup.Item>
                    <ListGroup.Item variant={theme} href="#link2">ListGroup</ListGroup.Item>
                </ListGroup>

                <Tab.Content>
                    <Tab.Pane eventKey="#link1">
                        {/*<Sonnet />*/}
                        <span>
                            1
                        </span>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2">
                        {/*<Sonnet />*/}
                        <span>
                            2
                        </span>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    )
}
