import React from "react";
import Wallet from "./wallet";
import { Container } from "./style";

const WalletList = ({ store }) => {
  const { walletList } = store;
  console.log(walletList);
  return (
    <Container>
      {walletList && walletList.map(wallet => <Wallet name={wallet.name} owner={wallet.owner} totalValue={wallet.totalValue}/>) }
    </Container>
  );
};

export default WalletList;
