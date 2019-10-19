import React, { useContext } from "react";
import { Container, Title, List, Button } from './style.js'
import Goal from "../goal";
import WalletContext from '../context-wallet'
import formatReal from "../utils/format-real/index.js";

const GoalsList = ({setShowGoals}) => {
  const arrayGols = useContext(WalletContext);
  return (
      <Container>
        <Title>Metas</Title>
        <List>
          {arrayGols.goalsList.map(({ title, icon, value }, index) => <Goal key={`key-goal-${index}`} title={title} icon={icon} value={formatReal(value)}></Goal>)}
        <Button onClick={() => setShowGoals(true)}>Nova Meta</Button>
        </List>
      </Container>
  );
};

export default GoalsList;
