import React from "react";
import { Container, Currency, Price } from "./style";

const Value = ({value}) => {
  return (
    <Container>
      <Currency>R$</Currency>
      <Price>{value}</Price>
    </Container>
  );
};

export default Value;
