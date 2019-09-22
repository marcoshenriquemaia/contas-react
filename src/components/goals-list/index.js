import React from "react";
import { Container, Title, List, Button } from './style.js'
import Goal from "../goal";

const GoalsList = () => {
  return (
    <>
      <Container>
        <Title>Metas</Title>
        <List>
          <Goal></Goal>
          <Goal></Goal>
          <Goal></Goal>
          <Goal></Goal>
          <Goal></Goal>
        </List>
        <Button>Nova Meta</Button>
      </Container>
    </>
  );
};

export default GoalsList;
