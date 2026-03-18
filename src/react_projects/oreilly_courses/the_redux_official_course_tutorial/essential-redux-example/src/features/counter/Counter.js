import React, { useState } from 'react';
import { increment, decrement, selectCount } from './counterslice';
import { useSelector, useDispatch } from 'react-redux';

export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <div>
            <button 
                onClick={() => dispatch(increment())}>
                    +
            </button>
            <span>{count}</span>
            <button 
                onClick={() => dispatch(decrement())}>
                    -
            </button>
        </div>
    )
}