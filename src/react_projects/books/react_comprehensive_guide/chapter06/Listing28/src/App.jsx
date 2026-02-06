import useCounter from './useCounter';

export default function App() {
  const counter = useCounter();

  return <div>{counter}</div>;
}
