import React from "react";
import { Container, Currency, Total } from "./style.js";
import formatReal from '../utils/format-real'

const TotalValue = () => {  
  return (
    <Container>
      <Currency>R$</Currency>
      <Total>100.000.00</Total>
    </Container>
  );
};

export default TotalValue;
