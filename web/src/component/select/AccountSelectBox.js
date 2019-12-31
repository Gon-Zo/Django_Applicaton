import React from "react";

export default () => {
    return (

        <div className="row tm-content-row">
            <div className="col-12 tm-block-col">
                <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                    <h2 className="tm-block-title text_start">List of Accounts</h2>
                    <p className="text-white text_start">Accounts</p>
                    <select className="custom-select">
                        <option value="0">Select account</option>
                        <option value="1">Admin</option>
                        <option value="2">Editor</option>
                        <option value="3">Merchant</option>
                        <option value="4">Customer</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
