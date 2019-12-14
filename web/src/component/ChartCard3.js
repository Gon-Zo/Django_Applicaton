import React, {useState} from 'react'

export default (props) => {
    return (
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
        <div className="tm-bg-primary-dark tm-block tm-block-taller">
            <h2 className="tm-block-title">{props.title}</h2>
            <div id="pieChartContainer">
                <canvas id="pieChart" className="chartjs-render-monitor" width="200" height="200"></canvas>
            </div>
        </div>
    </div>
    )
}
