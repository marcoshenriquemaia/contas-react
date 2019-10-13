import React from "react";
import IconBox from "../../icon-box";
import Value from "../../value";
import { Container, WrapperType, Type, Name } from "./style";

const Wallet = ({ cor, funcao, title, name, value, icon}) => {
  return (
    <Container onClick={funcao}>
      <IconBox cor={cor} icon={icon}></IconBox>
      <WrapperType>
        <Type>{title}</Type>
        <Name>{name}</Name>
      </WrapperType>
      <Value value={value}></Value>
    </Container>
  );
};

export default Wallet;
