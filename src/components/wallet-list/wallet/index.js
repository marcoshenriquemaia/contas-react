import React from "react";
import "./style.css";
import IconBox from "../../icon-box";
import Value from "../../value";

const Wallet = () => {
  return (
    <div className="wallet">
      <IconBox></IconBox>
      <div className="type-wallet-wrapper">
        <h1 className="type-wallet">Carteira</h1>
        <h2 className="name-wallet">nome</h2>
      </div>
      <Value value='100.000,00'></Value>
    </div>
  );
};

export default Wallet;
