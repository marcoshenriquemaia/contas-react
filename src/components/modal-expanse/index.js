import React, { useState, useContext } from "react";
import {
  Container,
  ValueField,
  Value,
  ContainerWallet,
  Date,
  WrapperWallet,
  TitleWallet,
  Obs
} from "./style";
import NavHeader from "../NavHeader";
import { Currency } from "../dialer-bigger/style";
import PortionsBox from "../portions-box";
import TagBox from "../tag-box";
import { Button } from "../goals-list/style";
import { NavLink } from "react-router-dom";
import CategorySelector from "../category-selector";

const ModalExpanse = () => {

  return (
    <Container>
      <NavHeader></NavHeader>
      <ContainerWallet>
        <ValueField>
          <Currency>R$</Currency>
          <Value>100,000.00</Value>
        </ValueField>
        <CategorySelector></CategorySelector>
        <CategorySelector></CategorySelector>
        <WrapperWallet>
          <TitleWallet>Data</TitleWallet>
          <Date></Date>
        </WrapperWallet>
        <WrapperWallet>
          <TitleWallet>Parcelas </TitleWallet>
          <PortionsBox >1x</PortionsBox>
        </WrapperWallet>
        <TagBox></TagBox>
        <Obs></Obs>
        <NavLink to="/expanses">
          <Button> </Button>
        </NavLink>
      </ContainerWallet>
    </Container>
  );
};

export default ModalExpanse;
