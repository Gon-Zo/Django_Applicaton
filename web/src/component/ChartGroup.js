import React from 'react'
import ChartCard1 from "./ChartCard1";
import ChartCard2 from "./ChartCard2";
import ChartCard3 from "./ChartCard3";
import ListCard from "./ListCard";
import ChartCard4 from "./ChartCard4";
import ChartCard5 from "./ChartCard5";


export default () => {
    return (
        <div className="row tm-content-row">

            <ChartCard1 title={"Latest Hits"}/>

            {/**/}

            <ChartCard2 title={"Performance"}/>

            {/**/}

            <ChartCard3 title={"Storage Information"}/>

            {/**/}

            <ChartCard4 title={"test1"}/>

            <ChartCard5 title={"test2"}/>

            <ListCard title={"Notification List"}/>

            {/*  Table   */}

        </div>

    )
};
