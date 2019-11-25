import React from "react";
import Wallet from "./wallet";
import { Container } from "./style";

const WalletList = ({ store }) => {
  const { walletList } = store;
  return (
    <Container>
      {walletList && walletList.map((wallet, index) => <Wallet key={`key-wallet-${index}`} name={wallet.name} owner={wallet.owner} totalValue={wallet.totalValue}/>) }
    </Container>
  );
};

export default WalletList;
