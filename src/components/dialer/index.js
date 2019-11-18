import React from "react";
import {
  Container,
  ValueField,
  KeyBox,
  Key,
} from "./style";
import IconType from "../shared/icon-type";
import formatReal from "../utils/format-real";

const Dialer = ({setValue, value, type, headerType}) => {
  const backspaceNumber = () =>{
    const numberArray = [...value];
    numberArray.pop();
    setValue(numberArray.join(''))
  }

  return (
    <Container>
      <ValueField type={type} headerType={headerType}>R$ {formatReal(value)}</ValueField>
      <KeyBox type={type}>
        <Key type={type}onClick={() => setValue(`${value}1`)}>1</Key>
        <Key type={type}onClick={() => setValue(`${value}2`)}>2</Key>
        <Key type={type}onClick={() => setValue(`${value}3`)}>3</Key>
        <Key type={type}onClick={() => setValue(`${value}4`)}>4</Key>
        <Key type={type}onClick={() => setValue(`${value}5`)}>5</Key>
        <Key type={type}onClick={() => setValue(`${value}6`)}>6</Key>
        <Key type={type}onClick={() => setValue(`${value}7`)}>7</Key>
        <Key type={type}onClick={() => setValue(`${value}8`)}>8</Key>
        <Key type={type}onClick={() => setValue(`${value}9`)}>9</Key>
        <Key type={type}onClick={() => setValue(`${value}0`)}>0</Key>
        <IconType icon="backspace" onClick={backspaceNumber}></IconType>
      </KeyBox>
    </Container>
  );
};

export default Dialer;
