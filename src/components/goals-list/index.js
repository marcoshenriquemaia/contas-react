import React from "react";
import { Container, Title, List, Button } from './style.js'
import Goal from "../goal";

const GoalsList = ({setShowGoals}) => {
  return (
      <Container>
        <Title>Metas</Title>
        <List>
          <Goal></Goal>
          <Goal></Goal>
          <Goal></Goal>
        <Button onClick={() => setShowGoals(true)}>Nova Meta</Button>
        </List>
      </Container>
  );
};

export default GoalsList;
