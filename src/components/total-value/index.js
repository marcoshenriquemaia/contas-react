import React from "react";
import { Container, Currency, Total } from "./style.js";
import formatReal from '../utils/format-real'

const TotalValue = ({totalValueExpanse}) => {
  
  return (
    <Container>
      <Currency>R$</Currency>
      <Total>{formatReal(totalValueExpanse)}</Total>
    </Container>
  );
};

export default TotalValue;
