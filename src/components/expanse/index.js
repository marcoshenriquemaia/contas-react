import React from "react";
import { Container, Wrapper, Principal, Sub, WrapperValue } from "./style";
import IconBox from "../icon-box";

const Expanse = () => {
  return (
    <Container>
      <IconBox icon="wallet"></IconBox>
      <Wrapper>
        <Principal>Tipo</Principal>
        <Sub>Conta</Sub>
      </Wrapper>
      <WrapperValue>
        <Principal>R$ 100,00</Principal>
        <Sub>não pago</Sub>
      </WrapperValue>
    </Container>
  );
};

export default Expanse;
