import React from "react";
import "./style.css";
import Goal from "../goal";

const GoalsList = () => {
  return (
    <>
      <div className="box-list">
      <h1 className="goals-list-title"> Metas </h1>
      <div className='goals-list'>
        <Goal></Goal>
        <Goal></Goal>
        <Goal></Goal>
        <Goal></Goal>
        <Goal></Goal>
      </div>
      <button className='add-goals-button'>Nova Meta</button>
      </div>
    </>
  );
};

export default GoalsList;
