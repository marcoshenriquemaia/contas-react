import React from "react";

import './style.css'

const Value = (prop) => {
  const { value } = prop;
  return (
    <div className="value-wrapper">
      <span className="currency-value">R$</span>
      <span className="value">{value}</span>
    </div>
  );
};

export default Value;
