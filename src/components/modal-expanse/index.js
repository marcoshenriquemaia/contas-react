import React from "react";
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
import { NavLink } from 'react-router-dom'
import CategorySelector from "../category-selector";

const ModalExpanse = ({headerType, setHeaderType, dialerValue}) => {
  return (
    <Container>
      <NavHeader headerType={headerType} setHeaderType={setHeaderType}></NavHeader>
      <ContainerWallet>
        <ValueField>
          <Currency>R$</Currency>
          <Value>{dialerValue}</Value>
        </ValueField>
        <CategorySelector></CategorySelector>
        <CategorySelector></CategorySelector>
        <WrapperWallet>
          <TitleWallet>Data</TitleWallet>
          <Date type="date"></Date>
        </WrapperWallet>
        <WrapperWallet>
          <TitleWallet>Parcelas </TitleWallet>
          <PortionsBox>1x</PortionsBox>
        </WrapperWallet>
        <TagBox></TagBox>
        <Obs placeholder='Obs...'></Obs>
        <NavLink to='/expanses'><Button></Button> </NavLink> 
      </ContainerWallet>
    </Container>
  );
};

export default ModalExpanse;
