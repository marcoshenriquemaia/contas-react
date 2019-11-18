import React, { useState, useContext } from "react";
import TotalValue from "../../components/total-value";
import WalletList from "../../components/wallet-list";
import GoalsList from "../../components/goals-list";
import { Container, Wrapper } from "./style.js";
import ModalGoals from "../../components/modal-goal";
import AppContext from '../../context/app-context'
import { UPDATE } from "../../reducers/root-reducer"

const Home = () => {
  const [showGoals, setShowGoals] = useState(false);
  const { store, setStore } = useContext(AppContext);

  return (
    <Container >
      {showGoals && <ModalGoals></ModalGoals>}
      <TotalValue></TotalValue>
      <Wrapper>
        <WalletList></WalletList>
        <GoalsList setShowGoals={setShowGoals} store={store} setStore={setStore}></GoalsList>
      </Wrapper>
    </Container>
  );
};

export default Home;
