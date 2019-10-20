import React from "react";
import { Container, Wrapper, Principal, Sub, WrapperValue } from "./style";
import IconBox from "../icon-box";

const Expanse = (prop) => {
  const { value, wallet, category, dateExpanse, portionsValue, obs, tagList } = prop.expanse;

  return (
    <Container>
      <IconBox icon={category.icon}></IconBox>
      <Wrapper>
        <Principal>{category.category}</Principal>
        <Sub>{category.subCategory}</Sub>
      </Wrapper>
      <WrapperValue>
        <Principal>R$ {value}</Principal>
        <Sub>não pago</Sub>
      </WrapperValue>
    </Container>
  );
};

export default Expanse;
