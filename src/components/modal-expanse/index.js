import React, { useState } from "react";
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
import { Currency } from "../../pages/dialer-bigger/style";
import PortionsBox from "../portions-box";
import TagBox from "../tag-box";
import { Button } from "../goals-list/style";
import { NavLink } from "react-router-dom";
import CategorySelector from "../category-selector";
import formatReal from '../utils/format-real'

const ModalExpanse = ({type, dialerValue}) => {
  const [walletSelected, setWalletSelected] = useState({});
  const [categorySelected, setCategorySelected] = useState({});
  const [tagList, setTagList] = useState([]);

  return (
    <Container>
      <NavHeader></NavHeader>
      <ContainerWallet>
        <ValueField>
          <Currency>R$</Currency>
          <Value>{formatReal(dialerValue)}</Value>
        </ValueField>
        <CategorySelector type={type} setCategorySelected={setWalletSelected} categorySelected={walletSelected}></CategorySelector>
        <CategorySelector type={type} setCategorySelected={setCategorySelected} categorySelected={categorySelected}></CategorySelector>
        <WrapperWallet>
          <TitleWallet>Data</TitleWallet>
          <Date type='date'></Date>
        </WrapperWallet>
        <WrapperWallet>
          <TitleWallet>Parcelas </TitleWallet>
          <PortionsBox >1x</PortionsBox>
        </WrapperWallet>
        <TagBox tagList={tagList} setTagList={setTagList}></TagBox>
        <Obs></Obs>
        <NavLink to="/expanses">
          <Button> </Button>
        </NavLink>
      </ContainerWallet>
    </Container>
  );
};

export default ModalExpanse;
