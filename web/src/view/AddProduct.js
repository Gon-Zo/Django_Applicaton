import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as fa from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import axios from "axios"
import {BASE_URL} from "../assets/comm/base";
import imageSrc from '../assets/img/avatar.png'

let data = [
    {val: 0, title: "Select category"},
    {val: 1, title: "New Arrival"},
    {val: 2, title: "Most Popular"},
    {val: 3, title: "Trending"},
];

const setSelectVal = function (data, idx) {
    return <option key={idx} value={data.val}>{data.title}</option>
};

const getSelectVal = function () {
    let optionVal = data;
    return optionVal.map((option, i) => setSelectVal(option, i))
};


export default () => {

    let [fileVal, setFilVal] = useState(null)

    const onChange = (e) => {
        console.log("test success")
        // this.setState({file:e.target.files[0]})
        let test = e.target.files[0]
        console.log(test)
        setFilVal(test)
    }


    // const test = ()=>{
    //     axios.get(`${BASE_URL}/api/image?seq=1`).then((res)=>{
    //         console.log(JSON.stringify(res.data.result[0].photo))
    //
    //     }).catch(err => console.log(err))
    // }
    //
    // test()


    return (
        <div className="container tm-mt-big tm-mb-big">
            <div className="row">

                {/*<img src={require(`${imageSrc}`)}/>*/}
                <img src={imageSrc}/>
                <input type="file" onChange={onChange}/>

                <button type="button" onClick={() => {

                    const formData = new FormData();
                    formData.append('file', fileVal);

                    axios.post(`${BASE_URL}/api/image`, formData, {
                        header: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }).then((res) => {
                        console.log(res)
                    }).catch(e => console.log(e))

                }}>End
                </button>

                {/*<img src={require('../assets/images/bg-title-01.jpg')} />*/}
                {/*<img src={require('./assets/images/bg-title-01.jpg')} />*/}
                {/*<img src={imageSrc} />*/}
                {/*<image src={image} width="100" height="100"/>*/}

                {/*<div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">*/}
                {/*    <div className="tm-bg-primary-dark tm-block tm-block-h-auto">*/}

                {/*        <div className="row">*/}
                {/*            <div className="col-12  text_start">*/}
                {/*                <h2 className="tm-block-title d-inline-block">Add Product</h2>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className="row tm-edit-product-row">*/}

                {/*            /!*<form action="" className="tm-edit-product-form">*!/*/}
                {/*            /!*    <div className="form-group mb-3">*!/*/}
                {/*            /!*        <Label for="name">Product Name</Label>*!/*/}
                {/*            /!*        <input id="name" name="name" type="text" className="form-control validate"/>*!/*/}
                {/*            /!*    </div>*!/*/}
                {/*            /!*</form>*!/*/}


                {/*            <form action="" className="tm-edit-product-form">*/}
                {/*                <div className="form-group mb-3">*/}
                {/*                    <label*/}
                {/*                        htmlFor="name"*/}
                {/*                    >Product Name*/}
                {/*                    </label>*/}
                {/*                    <input*/}
                {/*                        id="name"*/}
                {/*                        name="name"*/}
                {/*                        type="text"*/}
                {/*                        className="form-control validate"*/}
                {/*                        required*/}
                {/*                    />*/}
                {/*                </div>*/}

                {/*                <div className="form-group mb-3">*/}
                {/*                    <label htmlFor="description">Description</label>*/}
                {/*                    <textarea*/}
                {/*                        className="form-control validate"*/}
                {/*                        rows="3"*/}
                {/*                        required*/}
                {/*                    ></textarea>*/}
                {/*                </div>*/}

                {/*                <div className="form-group mb-3">*/}
                {/*                    <label htmlFor="category">Category</label>*/}
                {/*                    <select className="custom-select tm-select-accounts" id="category" defaultValue="0">*/}
                {/*                        {getSelectVal()}*/}
                {/*                    </select>*/}
                {/*                </div>*/}

                {/*                <div className="row">*/}
                {/*                    <div className="form-group mb-3 col-xs-12 col-sm-6">*/}
                {/*                        <label*/}
                {/*                            htmlFor="expire_date"*/}
                {/*                        >Expire Date*/}
                {/*                        </label>*/}
                {/*                        <input*/}
                {/*                            id="expire_date"*/}
                {/*                            name="expire_date"*/}
                {/*                            type="text"*/}
                {/*                            className="form-control validate"*/}
                {/*                            data-large-mode="true"*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                    <div className="form-group mb-3 col-xs-12 col-sm-6">*/}
                {/*                        <label*/}
                {/*                            htmlFor="stock"*/}
                {/*                        >Units In Stock*/}
                {/*                        </label>*/}
                {/*                        <input*/}
                {/*                            id="stock"*/}
                {/*                            name="stock"*/}
                {/*                            type="text"*/}
                {/*                            className="form-control validate"*/}
                {/*                            required*/}
                {/*                        />*/}
                {/*                    </div>*/}
                {/*                </div>*/}

                {/*                <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">*/}
                {/*                    <div className="tm-product-img-dummy mx-auto">*/}
                {/*                        /!*<i*!/*/}
                {/*                        /!*    className="fas fa-cloud-upload-alt tm-upload-icon"*!/*/}
                {/*                        /!*></i>*!/*/}
                {/*                        /!*onClick="document.getElementById('fileInput').click();"*!/*/}
                {/*                        <FontAwesomeIcon icon={fa.faCloudUploadAlt}*/}
                {/*                                         className="tm-upload-icon"/>*/}
                {/*                    </div>*/}

                {/*                    <div className="custom-file mt-3 mb-3">*/}
                {/*                        <input id="fileInput" type="file" className="display_none"/>*/}
                {/*                        <input*/}
                {/*                            type="button"*/}
                {/*                            className="btn btn-primary btn-block mx-auto"*/}
                {/*                            value="UPLOAD PRODUCT IMAGE"*/}
                {/*                            onClick={this.}*/}
                {/*                        />*/}
                {/*                        /!*onClick="document.getElementById('fileInput').click();"*!/*/}
                {/*                    </div>*/}
                {/*                </div>*/}

                {/*                <div className="col-12">*/}
                {/*                    <button type="submit" className="btn btn-primary btn-block text-uppercase">Add Product Now</button>*/}
                {/*                    <Link className="btn btn-warning btn-block text-uppercase" to="/products">Cancel</Link>*/}
                {/*                </div>*/}

                {/*            </form>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
};
