import React from 'react'
import Page from './page'
import Menu from './component/Menu'
import MarketHeader from "./component/MarketHeader";

const Root = () => {
    return (
        <div>
            <MarketHeader/>
            <Menu/>
            <Page/>
        </div>
    )
};

export default Root
