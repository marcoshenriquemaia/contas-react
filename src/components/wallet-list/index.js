import React, { useContext } from "react";
import Wallet from "./wallet";
import { Container } from "./style";
import ExpansesContext from "../context-wallet";

const WalletList = () => {
  const { arrayWallet } = useContext(ExpansesContext);
  const teste = [{color: 'red', title: 'teste', name: 'teste', value: 200, icon: 'wallet'}];
  return (
    <Container>
      {arrayWallet.map(
        ({ color, title, name, value, icon }, index) => (
          <Wallet
            key={`key-wallet-${index}`}
            cor={color}
            title={title}
            name={name}
            value={value}
            icon={icon}
          />
        )
      )}
    </Container>
  );
};

export default WalletList;
