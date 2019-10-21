import React, { useState, useEffect } from "react";
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

const arrayGols = []

const arrayWallet = [wallet, {...wallet, title: 'Nubank', name: 'Sabrina', value: 2000, color: 'blue'}, {...wallet, title: 'Santander', color: 'purple'}];

const Home = () => {
  const [showGoals, setShowGoals] = useState(false);
  const [walletList, setWalletList] = useState(arrayWallet);
  const [goalsList, setGoal] = useState(arrayGols);
  const [walletValue, setWalletValue] = useState(0);

  useEffect(() =>{
    const newWalletValue = arrayWallet.reduce((acumulator, item) =>{
      const { value } = item;
      return acumulator + value;
    }, 0)
    setWalletValue(newWalletValue);
    console.log(walletValue);
  })
  return (
    <WalletProvider value={{arrayWallet: walletList, setTeste: setWalletList, goalsList, setGoal}}>
      <Container>
        {showGoals && <ModalGoals setShowGoals={setShowGoals} setArrayGols={setGoal} oldValue={goalsList}></ModalGoals>}
        <TotalValue totalValueExpanse={walletValue}></TotalValue>
        <Wrapper>
          <WalletList></WalletList>
          <GoalsList setShowGoals={setShowGoals}></GoalsList>
        </Wrapper>
      </Container>
    </WalletProvider>
  );
};

export default Home;
