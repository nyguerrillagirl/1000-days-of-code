import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [showTimer, setShowTimer] = useState(true);
  useEffect(() => {
    setTimeout(() => setShowTimer(false), 5000);
  });

  return <div>{showTimer && <Timer />}</div>;
}
export default App;

function Timer() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(
      () => setTime((prevTime) => prevTime + 1),
      1000
    );
    return () => clearInterval(intervalRef.current);
  }, []);

  return <div>{time}</div>;
}
