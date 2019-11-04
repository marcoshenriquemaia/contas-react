import React, { useState, useEffect, useContext } from "react";
import TotalValue from "../../components/total-value";
import WalletList from "../../components/wallet-list";
import GoalsList from "../../components/goals-list";
import { Container, Wrapper } from "./style.js";
import ModalGoals from "../../components/modal-goal";
import { WalletProvider } from "../../components/context-wallet";
import ExpansesContext from "../../components/context-expanses";
import ModalWallet from "../../components/modal-wallet";

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
  const {arrayWallet, setArrayWallet} = useContext(ExpansesContext);
  const [showGoals, setShowGoals] = useState(false);
  const [goalsList, setGoal] = useState(arrayGols);
  const [walletValue, setWalletValue] = useState(0);
  const [goalsCategorys, setGaolsCategorys] = useState([{title: 'Eletrodomestico', name: 'Video-game', icon: 'games'} ]);
  const [showWalletModal, setShowWalletModal] = useState(false);

  useEffect(() => {
    const newWalletValue = arrayWallet.reduce((acumulator, item) => {
      const { value } = item;
      return acumulator + value;
    }, 0);
    setWalletValue(newWalletValue.toFixed(2));
  },[]);


  return (
    <WalletProvider
      value={{
        arrayWallet,
        goalsList,
        setGoal
      }}
    >
      <Container>
        {showGoals && 
          <ModalGoals
            setShowGoals={setShowGoals}
            setArrayGols={setGoal}
            oldValue={goalsList}
            goalsCategorys={goalsCategorys}
            type='goal'
          ></ModalGoals>
        }
        {showWalletModal && <ModalWallet></ModalWallet>}
        <TotalValue totalValueExpanse={walletValue}></TotalValue>
        <Wrapper>
          <WalletList setShowWalletModal={setShowWalletModal}></WalletList>
          <GoalsList setShowGoals={setShowGoals}></GoalsList>
        </Wrapper>
      </Container>
    </WalletProvider>
  );
};

export default Home;
