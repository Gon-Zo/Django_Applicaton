import React from 'react'
import Footer from "../component/Footer";
import Header from "../component/Header";
import ChartGroup from "../component/ChartGroup";

export default () => {
    return (
        <div className="" id="home">
            <Header/>

            <div className="container">

                <div className="row">
                    <div className="col">
                        <p className="text-white mt-5 mb-5">Welcome back, <b>Admin</b></p>
                    </div>
                </div>
                {/* row */}

                <ChartGroup/>

            </div>

            <Footer/>
        </div>
    )
}

