import React from "react";
import { Container, Currency, Price } from "./style";
import formatReal from "../utils/format-real"


const Value = ({value}) => {
  return (
    <Container>
      <Currency>R$</Currency>
      <Price>{formatReal(value)}</Price>
    </Container>
  );
};

export default Value;
