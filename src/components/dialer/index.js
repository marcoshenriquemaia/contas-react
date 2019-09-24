import React from "react";
import {
  Container,
  ValueField,
  KeyBox,
  Key,
} from "./style";
import IconType from "../shared/icon-type";

const Dialer = () => {
  return (
    <Container>
      <ValueField>R$ 100.000,00</ValueField>
      <KeyBox>
        <Key >1</Key>
        <Key>2</Key>
        <Key>3</Key>
        <Key>4</Key>
        <Key>5</Key>
        <Key>6</Key>
        <Key>7</Key>
        <Key>8</Key>
        <Key>9</Key>
        <Key>0</Key>
        <IconType icon="backspace"></IconType>
      </KeyBox>
    </Container>
  );
};

export default Dialer;
