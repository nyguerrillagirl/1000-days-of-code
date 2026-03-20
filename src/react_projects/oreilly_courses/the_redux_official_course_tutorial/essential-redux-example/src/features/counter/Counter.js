import React, { useState } from 'react';
import { increment, decrement, incrementByAmount, selectCount, incrementAsync, selectFetchStatus } from './counterslice';
import { useSelector, useDispatch } from 'react-redux';

export function Counter() {
    const count = useSelector(selectCount);
    const fetchStatus = useSelector(selectFetchStatus);

    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');
    const incrementValue = Number(incrementAmount) || 0;
    return (
        <div>
            <button 
                onClick={() => dispatch(increment())}>
                    +
            </button>
            <span>{fetchStatus === 'idle' ? count : 'Loading...'}</span>
            <button 
                onClick={() => dispatch(decrement())}>
                    -
            </button>
            <input
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />
            <button
                onClick={() => dispatch(incrementByAmount(incrementValue))}>
                Add Amount
            </button>
            <button
                onClick={() => dispatch(incrementAsync())}>
                Add Async
            </button>
        </div>
    )
}