import React, { useState, createContext } from "react";
import TotalValue from "../../components/total-value";
import WalletList from "../../components/wallet-list";
import GoalsList from "../../components/goals-list";
import { Container, Wrapper } from "./style.js";
import ModalGoals from "../../components/modal-goal";
import { WalletProvider } from "../../components/context-wallet";

const Home = () => {
  const [showGoals, setShowGoals] = useState(false);
  const [teste, setTeste] = useState(false);

  return (
    <WalletProvider value={{value: teste, setValue: setTeste}}>
      <Container>
        {showGoals && <ModalGoals setShowGoals={setShowGoals}></ModalGoals>}
        <TotalValue></TotalValue>
        <Wrapper>
          <WalletList></WalletList>
          <GoalsList setShowGoals={setShowGoals}></GoalsList>
        </Wrapper>
      </Container>
    </WalletProvider>
  );
};

export default Home;
