import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import AppTable from "../component/AppTable";

export default () => {
    return (
        <Container>
            <div>
                <span>Test</span>
            </div>

            <AppTable/>
            {/* AppTable end*/}
        </Container>
    )
}
