import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default () => {
    return (
        <div className="container tm-mt-big tm-mb-big">
            <div className="row">
                <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
                    <div className="tm-bg-primary-dark tm-block tm-block-h-auto">

                        <div className="row">
                            <div className="col-12  text_start">
                                <h2 className="tm-block-title d-inline-block">Add Category</h2>
                            </div>
                        </div>

                        <div className="row tm-edit-product-row">
                            <form action="" className="tm-edit-product-form">
                                <div className="form-group mb-3">
                                    <label htmlFor="title">Category Title</label>
                                    <input
                                        id="title"
                                        name="title"
                                        type="text"
                                        className="form-control validate"
                                        required
                                    />
                                </div>
                                {/*Title End*/}
                                <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
                                    <div className="tm-product-img-dummy mx-auto">
                                        {/*<i*/}
                                        {/*    className="fas fa-cloud-upload-alt tm-upload-icon"*/}
                                        {/*></i>*/}
                                        {/*onClick="document.getElementById('fileInput').click();"*/}
                                        <FontAwesomeIcon icon={fa.faCloudUploadAlt}
                                                         className="tm-upload-icon"/>
                                    </div>

                                    <div className="custom-file mt-3 mb-3">
                                        <input id="fileInput" type="file" className="display_none"/>
                                        <input
                                            type="button"
                                            className="btn btn-primary btn-block mx-auto"
                                            value="UPLOAD Category IMAGE"
                                        />
                                        {/*onClick="document.getElementById('fileInput').click();"*/}
                                    </div>
                                </div>
                                {/*// File Upload End*/}
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary btn-block text-uppercase">Add
                                        Product Now
                                    </button>
                                    <Link className="btn btn-warning btn-block text-uppercase"
                                          to="/products">Cancel</Link>
                                </div>
                                {/*// Button Box end*/}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
