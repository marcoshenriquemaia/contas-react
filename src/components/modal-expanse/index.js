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
import ExpansesContext from "../context-expanses";
import convertInt from "../utils/convert-int";

const ModalExpanse = ({ headerType, setHeaderType, dialerValue }) => {
  const [walletSelected, setWalletSelected] = useState({});
  const [categorySelected, setCategorySelected] = useState({});
  const [dateExpanse, setDateExpanse] = useState("");
  const [portionsValue, setPortionsValue] = useState(null);
  const [tagList, setTagList] = useState([]);
  const [obs, setObs] = useState("");

  const { setExpansesInformation, expansesInformation } = useContext(
    ExpansesContext
  );
  const { arrayWallet, setArrayWallet } = useContext(ExpansesContext);

  const subtractWallet = () => {
    const dialerValueInt = convertInt(dialerValue);
    arrayWallet.map(wallet => {
      if (wallet.title != walletSelected.title) return;
      headerType === "revenue"
        ? (wallet.value = wallet.value + dialerValueInt)
        : (wallet.value = wallet.value - dialerValueInt);
    });
  };

  const handleOnChangeDate = ({ target: { value } }) => {
    setDateExpanse(value);
  };

  const handleOnChangeObs = ({ target: { value } }) => {
    setObs(value);
  };

  const handleClickButton = e => {
    if (!dateExpanse) {
      e.preventDefault();
      return;
    }
    setExpansesInformation([
      ...expansesInformation,
      {
        value: dialerValue,
        wallet: {
          category: walletSelected.title,
          subCategory: walletSelected.name,
          icon: walletSelected.icon
        },
        category: {
          category: categorySelected.title,
          subCategory: categorySelected.name,
          icon: categorySelected.icon
        },
        dateExpanse,
        portionsValue,
        obs,
        tagList
      }
    ]);
    subtractWallet();
  };

  return (
    <Container>
      <NavHeader
        headerType={headerType}
        setHeaderType={setHeaderType}
      ></NavHeader>
      <ContainerWallet>
        <ValueField>
          <Currency>R$</Currency>
          <Value>{dialerValue}</Value>
        </ValueField>
        <CategorySelector
          type="wallet"
          setWalletSelected={setWalletSelected}
          arrayWallet={arrayWallet}
          setArrayWallet={setArrayWallet}
        ></CategorySelector>
        <CategorySelector
          type="category"
          setCategorySelected={setCategorySelected}
        ></CategorySelector>
        <WrapperWallet>
          <TitleWallet>Data</TitleWallet>
          <Date type="date" onChange={handleOnChangeDate}></Date>
        </WrapperWallet>
        <WrapperWallet>
          <TitleWallet>Parcelas </TitleWallet>
          <PortionsBox setPortionsValue={setPortionsValue}>1x</PortionsBox>
        </WrapperWallet>
        <TagBox setTagList={setTagList} tagList={tagList}></TagBox>
        <Obs placeholder="Obs..." onChange={handleOnChangeObs}></Obs>
        <NavLink to="/expanses">
          <Button onClick={handleClickButton}>Concluir</Button>
        </NavLink>
      </ContainerWallet>
    </Container>
  );
};

export default ModalExpanse;
