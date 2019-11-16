import React from "react";
import { Container, WrapperText, Title, SubTitle } from "./style";
import IconBox from "../../icon-box";

const SelectableItem = ({ index, icon, title, subTitle, ...rest }) => {
  return (
    <Container delay={index * 50} {...rest}>
      <IconBox icon={icon}></IconBox>
      <WrapperText>
        <Title>{title ? title : 'Categoria'}</Title>
        <SubTitle>{subTitle ? subTitle : 'SubCategoria'}</SubTitle>
      </WrapperText>
    </Container>
  );
};

export default SelectableItem;
