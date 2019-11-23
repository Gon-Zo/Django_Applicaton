import React from 'react'
import Page from './page/indx'
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
