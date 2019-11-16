import React from "react";
import IconBox from "../../icon-box";
import Value from "../../value";
import { Container, WrapperType, Type, Name } from "./style";

const Wallet = () => {
  return (
    <Container>
      <IconBox></IconBox>
      <WrapperType>
        <Type></Type>
        <Name></Name>
      </WrapperType>
      <Value></Value>
    </Container>
  );
};

export default Wallet;
