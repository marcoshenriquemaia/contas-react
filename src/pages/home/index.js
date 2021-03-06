import React, { useState, useContext } from "react";
import TotalValue from "../../components/total-value";
import WalletList from "../../components/wallet-list";
import GoalsList from "../../components/goals-list";
import { Container, Wrapper } from "./style.js";
import ModalGoals from "../../components/modal-goal";
import AppContext from '../../context/app-context'

const Home = () => {
  const [showGoals, setShowGoals] = useState(false);
  const { store, setStore } = useContext(AppContext);
  
  return (
    <Container >
      {showGoals && <ModalGoals store={store} setStore={setStore} setShowGoals={setShowGoals}></ModalGoals>}
      <TotalValue></TotalValue>
      <Wrapper>
        <WalletList store={store}></WalletList>
        <GoalsList setShowGoals={setShowGoals} store={store} setStore={setStore}></GoalsList>
      </Wrapper>
    </Container>
  );
};

export default Home;
