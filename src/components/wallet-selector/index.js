import React from "react";
import { Container, WrapperCategory, SubTitleCategory } from "./style";
import IconBox from "../icon-box";
import { TitleCategory } from "../category-selector/style";
import ButtonSelector from "../shared/button-selector";

const WalletSelector = () => {
  return (
    <Container>
      <IconBox></IconBox>
      <WrapperCategory>
        <TitleCategory>aaaa</TitleCategory>
        <SubTitleCategory>aaaa</SubTitleCategory>
      </WrapperCategory>

      <ButtonSelector></ButtonSelector>
    </Container>
  );
};

export default WalletSelector;
