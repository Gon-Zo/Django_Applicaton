import React, {useState} from 'react'
import {useSelector} from "react-redux";

export default (props) => {

    const user = useSelector(state => state.appUser, []);

    let cnt = props.count;
    let numPage = props.numPage;
    let fetchUser = props.fetchUser;

    if (typeof numPage !== 'undefined') {
        let temp = new Array();

        for (var i = 1; i <= numPage; i++) {
            temp.push(i)
        }

        let onCLick = (e) => {
            let vl = e.target.text
            user.clickPage = vl
            fetchUser()
        }

        return (
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                {
                    temp.map((m, i) => (
                        <li className="page-item" key={i} onClick={onCLick} data-value={m}>
                            <a className="page-link" href="#">{m}</a>
                        </li>
                    ))
                }
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        )

    } else {
        return (
            <div>lod</div>
        )
    }


    // if (!typeof cnt == 'undefined' && !typeof numPage == 'undefined') {
    //     return (
    //         <ul className="pagination">
    //             <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Previous">
    //                     <span aria-hidden="true">&laquo;</span>
    //                     <span className="sr-only">Previous</span>
    //                 </a>
    //             </li>
    //             <li className="page-item"><a className="page-link" href="#">1</a></li>
    //             <li className="page-item"><a className="page-link" href="#">2</a></li>
    //             <li className="page-item"><a className="page-link" href="#">3</a></li>
    //             <li className="page-item">
    //                 <a className="page-link" href="#" aria-label="Next">
    //                     <span aria-hidden="true">&raquo;</span>
    //                     <span className="sr-only">Next</span>
    //                 </a>
    //             </li>
    //         </ul>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <span>lod</span>
    //         </div>
    //     )
    // }

}
