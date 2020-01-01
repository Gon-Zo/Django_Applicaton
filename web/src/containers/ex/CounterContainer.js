import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Counter from '../../view/ex/Counter';

export default () => {
    const counter = useSelector(state => state.counter, []);
    const dispatch = useDispatch();

    const onIncrease = useCallback(
        () => dispatch({type: "counter/INCREMENT"}),
        [dispatch]
    );

    const onDecrement = useCallback(
        () => dispatch({type: "counter/DECREMENT"}),
        [dispatch]
    );

    return (
        <Counter number={counter} onIncrease={onIncrease} onDecrease={onDecrement}/>
    );
};
