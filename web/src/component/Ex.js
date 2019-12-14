import React, {useState} from 'react'

export default (props) => {

    //
    const [count, setCount] = useState(0);

    return (
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
            <div className="tm-bg-primary-dark tm-block">
                <div>
                    <span>{props.title}</span>
                    <span>{count}</span>
                </div>
                <button onClick={() => {
                    setCount(count + 1)
                }}>Test
                </button>
                {/*<h2 className="tm-block-title">Latest Hits</h2>*/}
                {/*<canvas id="lineChart"></canvas>*/}
            </div>
        </div>
    )
};
