import React from "react";
import IconBox from "../../icon-box";
import Value from "../../value";
import { Container, WrapperType, Type, Name } from "./style";
import formatReal from '../../utils/format-real'

const Wallet = ({ name, owner, totalValue }) => {
  return (
    <Container>
      <IconBox icon="wallet" />
      <WrapperType>
        <Type>{name}</Type>
        <Name>{owner}</Name>
      </WrapperType>
    <Value value={totalValue}/>
    </Container>
  );
};

export default Wallet;
