import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval( () => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h2>Today is {time.toLocaleDateString()}</h2>
      <h2>It is {time.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Clock;