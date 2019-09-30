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
import WalletSelector from "../wallet-selector";
import PortionsBox from "../portions-box";
import TagBox from "../tag-box";
import { Button } from "../goals-list/style";

const ModalExpanse = () => {
  return (
    <Container>
      <NavHeader></NavHeader>
      <ContainerWallet>
        <ValueField>
          <Currency>R$</Currency>
          <Value>100.000,00</Value>
        </ValueField>
        <WalletSelector></WalletSelector>
        <WalletSelector></WalletSelector>
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
        <Button></Button>
      </ContainerWallet>
    </Container>
  );
};

export default ModalExpanse;
