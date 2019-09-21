import React from "react";
import TotalValue from "../../components/total-value";
import WalletList from "../../components/wallet-list";
import "./style.css";
import GoalsList from "../../components/goals-list";

const Home = () => {
  return (
    <section className="home-container">
      <TotalValue></TotalValue>
      <div className="container-wallet-goals">
        <WalletList></WalletList>
        <GoalsList></GoalsList>
      </div>
    </section>
  );
};

export default Home;
