import React from "react";
import IconBox from "../icon-box";
import Value from "../value";
import "./style.css";

const Goal = () => {
  return (
    <div className="goal-box">
      <IconBox></IconBox>
        <div className="title-bar-wrapper">
          <h1 className="title-reserve">Reserva</h1>
          <div className="goal-bar">
            <div className="progress-bar"></div>
          </div>
        </div>
        <Value value="100.000,00"></Value>
    </div>
  );
};

export default Goal;
