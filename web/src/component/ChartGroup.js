import React from 'react'

export default () => {
    return (
        <div className="row tm-content-row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
                <div className="tm-bg-primary-dark tm-block">
                    <h2 className="tm-block-title">Latest Hits</h2>
                    <canvas id="lineChart"></canvas>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
                <div className="tm-bg-primary-dark tm-block">
                    <h2 className="tm-block-title">Performance</h2>
                    <canvas id="barChart"></canvas>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
                <div className="tm-bg-primary-dark tm-block tm-block-taller">
                    <h2 className="tm-block-title">Storage Information</h2>
                    <div id="pieChartContainer">
                        <canvas id="pieChart" className="chartjs-render-monitor" width="200" height="200"></canvas>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
                <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-overflow">
                    <h2 className="tm-block-title">Notification List</h2>
                    <div className="tm-notification-items">
                        <div className="media tm-notification-item">
                            <div className="tm-gray-circle"><img src="../assets/img/notification-01.jpg"
                                                                 alt="Avatar Image" className="rounded-circle"/></div>
                            <div className="media-body">
                                <p className="mb-2"><b>Jessica</b> and <b>6 others</b> sent you new <a href="#"
                                                                                                       className="tm-notification-link">product
                                    updates</a>. Check new orders.</p>
                                <span className="tm-small tm-text-color-secondary">6h ago.</span>
                            </div>
                        </div>
                        <div className="media tm-notification-item">
                            <div className="tm-gray-circle"><img src="../assets/img/notification-02.jpg"
                                                                 alt="Avatar Image" className="rounded-circle"/></div>
                            <div className="media-body">
                                <p className="mb-2"><b>Oliver Too</b> and <b>6 others</b> sent you existing <a href="#"
                                                                                                               className="tm-notification-link">product
                                    updates</a>. Read more reports.</p>
                                <span className="tm-small tm-text-color-secondary">6h ago.</span>
                            </div>
                        </div>
                        <div className="media tm-notification-item">
                            <div className="tm-gray-circle"><img src="../assets/img/notification-03.jpg"
                                                                 alt="Avatar Image" className="rounded-circle"/></div>
                            <div className="media-body">
                                <p className="mb-2"><b>Victoria</b> and <b>6 others</b> sent you <a href="#"
                                                                                                    className="tm-notification-link">order
                                    updates</a>. Read order information.</p>
                                <span className="tm-small tm-text-color-secondary">6h ago.</span>
                            </div>
                        </div>
                        <div className="media tm-notification-item">
                            <div className="tm-gray-circle"><img src="../assets/img/notification-01.jpg"
                                                                 alt="Avatar Image" className="rounded-circle"/></div>
                            <div className="media-body">
                                <p className="mb-2"><b>Laura Cute</b> and <b>6 others</b> sent you <a href="#"
                                                                                                      className="tm-notification-link">product
                                    records</a>.</p>
                                <span className="tm-small tm-text-color-secondary">6h ago.</span>
                            </div>
                        </div>
                        <div className="media tm-notification-item">
                            <div className="tm-gray-circle"><img src="../assets/img/notification-02.jpg"
                                                                 alt="Avatar Image" className="rounded-circle"/></div>
                            <div className="media-body">
                                <p className="mb-2"><b>Samantha</b> and <b>6 others</b> sent you <a href="#"
                                                                                                    className="tm-notification-link">order
                                    stuffs</a>.</p>
                                <span className="tm-small tm-text-color-secondary">6h ago.</span>
                            </div>
                        </div>
                        <div className="media tm-notification-item">
                            <div className="tm-gray-circle"><img src="../assets/img/notification-03.jpg"
                                                                 alt="Avatar Image" className="rounded-circle"/></div>
                            <div className="media-body">
                                <p className="mb-2"><b>Sophie</b> and <b>6 others</b> sent you <a href="#"
                                                                                                  className="tm-notification-link">product
                                    updates</a>.</p>
                                <span className="tm-small tm-text-color-secondary">6h ago.</span>
                            </div>
                        </div>
                        <div className="media tm-notification-item">
                            <div className="tm-gray-circle"><img src="../assets/img/notification-01.jpg"
                                                                 alt="Avatar Image" className="rounded-circle"/></div>
                            <div className="media-body">
                                <p className="mb-2"><b>Lily A</b> and <b>6 others</b> sent you <a href="#"
                                                                                                  className="tm-notification-link">product
                                    updates</a>.</p>
                                <span className="tm-small tm-text-color-secondary">6h ago.</span>
                            </div>
                        </div>
                        <div className="media tm-notification-item">
                            <div className="tm-gray-circle"><img src="../assets/img/notification-02.jpg"
                                                                 alt="Avatar Image" className="rounded-circle"/></div>
                            <div className="media-body">
                                <p className="mb-2"><b>Amara</b> and <b>6 others</b> sent you <a href="#"
                                                                                                 className="tm-notification-link">product
                                    updates</a>.</p>
                                <span className="tm-small tm-text-color-secondary">6h ago.</span>
                            </div>
                        </div>
                        <div className="media tm-notification-item">
                            <div className="tm-gray-circle"><img src="../assets/img/notification-03.jpg"
                                                                 alt="Avatar Image"
                                                                 className="rounded-circle"/></div>
                            <div className="media-body">
                                <p className="mb-2"><b>Cinthela</b> and <b>6 others</b> sent you <a href="#"
                                                                                                    className="tm-notification-link">product
                                    updates</a>.</p>
                                <span className="tm-small tm-text-color-secondary">6h ago.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Table   */}
        </div>

    )
};
