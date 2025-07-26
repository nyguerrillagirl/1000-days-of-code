import Button from './Button';  
import React from 'react';
import './App.css';

function App() {

  const handleAddToCart = () => { alert("Added to cart!"); };
  const handleCheckout = () => { alert("Proceeding to checkout!"); };

  return (
    <div className="App">
      <Button label="Add to Cart" onClick={handleAddToCart} />
      <Button label="Checkout" onClick={handleCheckout} />
     </div>
  );
}

export default App;
