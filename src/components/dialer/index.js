import React, { useState } from "react";
import {
  Container,
  ValueField,
  KeyBox,
  Key,
} from "./style";
import IconType from "../shared/icon-type";
import formatReal from "../utils/format-real";

const Dialer = () => {
  const [value, setValue] = useState('');

  return (
    <Container>
      <ValueField>R$ {formatReal(value)}</ValueField>
      <KeyBox>
        <Key onClick={() => setValue(`${value}1`)}>1</Key>
        <Key onClick={() => setValue(`${value}2`)}>2</Key>
        <Key onClick={() => setValue(`${value}3`)}>3</Key>
        <Key onClick={() => setValue(`${value}4`)}>4</Key>
        <Key onClick={() => setValue(`${value}5`)}>5</Key>
        <Key onClick={() => setValue(`${value}6`)}>6</Key>
        <Key onClick={() => setValue(`${value}7`)}>7</Key>
        <Key onClick={() => setValue(`${value}8`)}>8</Key>
        <Key onClick={() => setValue(`${value}9`)}>9</Key>
        <Key onClick={() => setValue(`${value}0`)}>0</Key>
        <IconType icon="backspace" onClick={()=>console.log(value)}></IconType>
      </KeyBox>
    </Container>
  );
};

export default Dialer;
