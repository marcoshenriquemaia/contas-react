import React from "react";
import IconBox from "../icon-box";
import Value from "../value";
import { Container, Wrapper, Title, Bar, ProgressBar } from "./style.js";

const Goal = () => {
  return (
    <Container>
      <IconBox></IconBox>
      <Wrapper>
        <Title>Reserva</Title>
        <Bar>
          <ProgressBar></ProgressBar>
        </Bar>
      </Wrapper>
      <Value value="100.000,00"></Value>
    </Container>
  );
};

export default Goal;
