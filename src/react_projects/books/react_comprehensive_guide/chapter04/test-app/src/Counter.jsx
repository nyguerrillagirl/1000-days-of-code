import { useRef, useState } from 'react';

function Counter() {
    const renderCount = useRef(0);
    const [value, setValue] = useState(0);

    renderCount.current += 1;

    return (
        <div>
            <p>Value: {value}</p>
            <p>Renders: {renderCount.current}</p>  
            <button onClick={() => setValue(value + 1)}>Increment</button>
        </div>
    )
}

export default Counter;