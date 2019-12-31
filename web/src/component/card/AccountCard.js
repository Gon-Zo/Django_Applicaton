import React from "react";

export default ()=>{
    return(
        <div className="tm-block-col tm-col-avatar">
            <div className="tm-bg-primary-dark tm-block tm-block-avatar">
                <h2 className="tm-block-title">Change Avatar</h2>
                <div className="tm-avatar-container">
                    <img
                        src="img/avatar.png"
                        alt="Avatar"
                        className="tm-avatar img-fluid mb-4"
                    />
                    <a href="#" className="tm-avatar-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                    </a>
                </div>
                <button className="btn btn-primary btn-block text-uppercase">
                    Upload New Photo
                </button>
            </div>
        </div>
    )
}
