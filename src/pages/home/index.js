import React, { useState, useEffect } from "react";
import TotalValue from "../../components/total-value";
import WalletList from "../../components/wallet-list";
import GoalsList from "../../components/goals-list";
import { Container, Wrapper } from "./style.js";
import ModalGoals from "../../components/modal-goal";
import { WalletProvider } from "../../components/context-wallet";

const goalInformation = {
  title: "Viagem",
  icon: "wallet",
  value: 500,
  date: {
    create: "10-04-2019",
    end: "10-04-2020"
  },
  category: {
    title: "Viagem",
    subTitle: "Chácara",
    icon: "travel"
  }
};

const arrayGols = [];

const Home = () => {
   
  const wallet = {
    _Id: '1',
    title: "Itau",
    name: "Marcos",
    value: 1050.25,
    icon: "wallet",
    color: "red"
  };

  const arrayWallet = [
    wallet,
    { ...wallet, title: "Nubank", name: "Sabrina", value: 2000, color: "purple",_Id: '2' },
    { ...wallet, title: "Santander", color: "blue", _Id: '3' }
  ];

  const [showGoals, setShowGoals] = useState(false);
  const [walletList, setWalletList] = useState(arrayWallet);
  const [goalsList, setGoal] = useState(arrayGols);
  const [walletValue, setWalletValue] = useState(0);
  const [goalsCategorys, setGaolsCategorys] = useState([{title: 'Eletrodomestico', name: 'Video-game', icon: 'games'} ])

  useEffect(() => {
    const newWalletValue = arrayWallet.reduce((acumulator, item) => {
      const { value } = item;
      return acumulator + value;
    }, 0);
    setWalletValue(newWalletValue);
  },0);
  return (
    <WalletProvider
      value={{
        arrayWallet: walletList,
        setTeste: setWalletList,
        goalsList,
        setGoal
      }}
    >
      <Container>
        {showGoals && (
          <ModalGoals
            setShowGoals={setShowGoals}
            setArrayGols={setGoal}
            oldValue={goalsList}
            goalsCategorys={goalsCategorys}
            type='goal'
          ></ModalGoals>
        )}
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
