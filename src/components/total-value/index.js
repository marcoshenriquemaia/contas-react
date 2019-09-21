import React from 'react';
import './style.css'

const TotalValue = () => {
  return (
    <div className='total-value-box'>
      <span className="currency-total-value">R$</span>
      <span className="total-price">100.000,00</span>
    </div>
  );
};

export default TotalValue;
