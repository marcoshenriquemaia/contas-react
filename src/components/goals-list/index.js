import React from "react";
import { Container, Title, List, Button } from "./style.js";
import Goal from "../goals-list/goal";

const GoalsList = ({ setShowGoals, store }) => {
  const { goals } = store;

  const handleClickButton = () => {
    setShowGoals(true);
  };

  return (
    <Container>
      <Title>Metas</Title>
      <List>
        {goals && goals.map(({name, type: {icon, color}, finalValue}, index) => <Goal name={name} icon={icon} finalValue={finalValue} color={color} key={`goal-key-${index}`}></Goal>)}
        <Button onClick={handleClickButton}>Nova Meta</Button>
      </List>
    </Container>
  );
};

export default GoalsList;
