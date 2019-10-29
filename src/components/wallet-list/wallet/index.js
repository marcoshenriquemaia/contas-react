import React from "react";
import IconBox from "../../icon-box";
import Value from "../../value";
import { Container, WrapperType, Type, Name } from "./style";

const Wallet = ({ cor, title, name, value, icon, setShowWalletModal}) => {
  return (
    <Container onClick={() => setShowWalletModal(true)}>
      <IconBox cor={cor} icon={icon}></IconBox>
      <WrapperType>
        <Type>{title}</Type>
        <Name>{name}</Name>
      </WrapperType>
      <Value value={value.toFixed(2)}></Value>
    </Container>
  );
};

export default Wallet;
