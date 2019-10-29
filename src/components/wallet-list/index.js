import React, { useContext } from "react";
import Wallet from "./wallet";
import { Container } from "./style";
import ExpansesContext from "../context-wallet";

const WalletList = ({setShowWalletModal}) => {
  const { arrayWallet } = useContext(ExpansesContext);
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
            setShowWalletModal={setShowWalletModal}
          />
        )
      )}
    </Container>
  );
};

export default WalletList;
