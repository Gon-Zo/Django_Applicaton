import React, {useState} from 'react'

export default (props) => {
    return (
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
            <div className="tm-bg-primary-dark tm-block">
                <h2 className="tm-block-title">{props.title}</h2>
                <canvas id="barChart"></canvas>
            </div>
        </div>
    )
}
