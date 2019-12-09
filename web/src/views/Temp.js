import React from 'react'
import {Container, Row, Col} from "shards-react";

// init function
const setLayout = () => {
    return (
        <Container>
            <div>
                <span>Temp Layout</span>
            </div>
        </Container>
    )
};

// Temp Layout
const Temp = () => {
    return setLayout();
};

export default Temp
