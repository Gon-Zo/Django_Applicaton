import React from 'react'
import ChartCard1 from "./ChartCard1";
import ChartCard2 from "./ChartCard2";
import ChartCard3 from "./ChartCard3";
import ListCard from "./ListCard";



export default () => {
    return (
        <div className="row tm-content-row">

            <ChartCard1 title={"Latest Hits"}/>

            {/**/}

            <ChartCard2 title={"Performance"}/>

            {/**/}

            <ChartCard3 title={"Storage Information"}/>

            {/**/}

            <ListCard title={"Notification List"}/>

            {/*  Table   */}

        </div>

    )
};
