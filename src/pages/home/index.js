import React, { useState } from "react";
import TotalValue from "../../components/total-value";
import WalletList from "../../components/wallet-list";
import GoalsList from "../../components/goals-list";
import { Container, Wrapper } from "./style.js";
import ModalGoals from "../../components/modal-goal";
import { WalletProvider } from "../../components/context-wallet";

const wallet = {
  title: 'Itau',
  name: 'Marcos',
  value:  1050.25,
  icon: 'wallet',
  color: 'red',
}

const goalInformation = {
  title: 'Viagem',
  icon: 'wallet',
  value: 500,
  date: {
    create: '10-04-2019',
    end: '10-04-2020',
  },
  category: {
    title: 'Viagem',
    subTitle: 'Chácara',
    icon: 'travel',
  },
}

const arrayGols = [goalInformation, goalInformation]

const arrayWallet = [wallet, {...wallet, title: 'Nubank', name: 'Sabrina', value: 2000, color: 'blue'}, {...wallet, title: 'Santander', color: 'purple'}];

const Home = () => {
  const [showGoals, setShowGoals] = useState(false);
  const [teste, setTeste] = useState(arrayWallet);
  const [goalsList, setGoal] = useState(arrayGols);

  return (
    <WalletProvider value={{arrayWallet: teste, setTeste, goalsList, setGoal}}>
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
