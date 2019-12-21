import React from 'react'
import {useSelector} from "react-redux";

export default ({number, onIncrease, onDecrease}) => {
    // const counter = useSelector(state => state.counter);
    return (
        <div>
            <span>
                {number}
            </span>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}

