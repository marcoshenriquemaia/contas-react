import React, { useState } from "react";
import TotalValue from "../../components/total-value";
import WalletList from "../../components/wallet-list";
import "./style.css";
import GoalsList from "../../components/goals-list";
import { Container, Wrapper } from "./style.js";

const Home = () => {
  const [mostraMeta, setMostraMeta] = useState(false);

  return (
    <Container>
      <TotalValue setMostraMeta={() => setMostraMeta(!mostraMeta)}></TotalValue>
      <Wrapper>
        <WalletList></WalletList>
        <GoalsList></GoalsList>
      </Wrapper>
    </Container>
  );
};

export default Home;
