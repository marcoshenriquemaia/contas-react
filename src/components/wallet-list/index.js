import React, { useContext } from "react";
import Wallet from "./wallet";
import { Container } from "./style";
import Store from '../../store'

const WalletList = ({setShowWalletModal}) => {
  Store.update({id: 1});
  return (
    <Container>
      {Store.wallets.map(
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
