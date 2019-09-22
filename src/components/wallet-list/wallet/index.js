import React from "react";
import IconBox from "../../icon-box";
import Value from "../../value";
import { Container, WrapperType, Type, Name } from "./style";

const Wallet = ({ cor, funcao }) => {
  return (
    <Container onClick={funcao}>
      <IconBox cor={cor}></IconBox>
      <WrapperType>
        <Type>Carteira</Type>
        <Name>nome</Name>
      </WrapperType>
      <Value value="100.000,00"></Value>
    </Container>
  );
};

export default Wallet;
