import React, { useState, useEffect } from "react";
import TotalValue from "../../components/total-value";
import WalletList from "../../components/wallet-list";
import GoalsList from "../../components/goals-list";
import { Container, Wrapper } from "./style.js";
import ModalGoals from "../../components/modal-goal";

const Home = () => {
  const [showGoals, setShowGoals] = useState(false);

  return (
    <Container>
      { showGoals && <ModalGoals></ModalGoals>}
      <TotalValue></TotalValue>
      <Wrapper>
        <WalletList></WalletList>
        <GoalsList setShowGoals={setShowGoals}></GoalsList>
      </Wrapper>
    </Container>
  );
};

export default Home;
