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
import { Currency } from "../../pages/dialer-bigger/style";
import PortionsBox from "../portions-box";
import TagBox from "../tag-box";
import { Button } from "../goals-list/style";
import { NavLink } from "react-router-dom";
import CategorySelector from "../category-selector";
import formatReal from '../utils/format-real'
import AppContext from "../../context/app-context";

const ModalExpanse = ({type, dialerValue}) => {
  const [walletSelected, setWalletSelected] = useState({});
  const [categorySelected, setCategorySelected] = useState({});
  const [tagList, setTagList] = useState([]);
  const [dateValue, setDateValue] = useState('');
  const [portionsValue, setPortionsValue] = useState('');
  const [obsValue, setObsValue] = useState('');
  const { store, setStore } = useContext(AppContext);
  
  const handleOnChangeDate = ({target}) =>{
    setDateValue(target.value);
  }

  const handleOnChangeObs = ({target}) =>{
    setObsValue(target.value)
  }

  console.log(store);

  // console.log(walletSelected, categorySelected, tagList, dateValue, portionsValue, dialerValue, obsValue);

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
          <Date type='date' onChange={handleOnChangeDate}></Date>
        </WrapperWallet>
        <WrapperWallet>
          <TitleWallet>Parcelas </TitleWallet>
          <PortionsBox setPortionsValue={setPortionsValue}>1x</PortionsBox>
        </WrapperWallet>
        <TagBox tagList={tagList} setTagList={setTagList}></TagBox>
        <Obs onChange={handleOnChangeObs}></Obs>
        <NavLink to="/expanses">
          <Button> </Button>
        </NavLink>
      </ContainerWallet>
    </Container>
  );
};

export default ModalExpanse;
