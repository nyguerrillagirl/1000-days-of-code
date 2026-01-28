import { useContext } from 'react';
import Context from './Context';

function Counter() {
  const value = useContext(Context);

  return <div>Counter: {value}</div>;
}

export default Counter;
