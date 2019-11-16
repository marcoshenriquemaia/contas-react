import React from "react";
import { Container, Wrapper, Principal, Sub, WrapperValue } from "./style";
import IconBox from "../icon-box";

const Expanse = () => {
  return (
    <Container>
      <IconBox></IconBox>
      <Wrapper>
        <Principal>Category</Principal>
        <Sub>SubC</Sub>
      </Wrapper>
      <WrapperValue>
        <Principal>R$ 100.000,00</Principal>
        <Sub>não pago</Sub>
      </WrapperValue>
    </Container>
  );
};

export default Expanse;
