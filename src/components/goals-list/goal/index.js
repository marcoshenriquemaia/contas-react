import React from "react";
import IconBox from "../../icon-box";
import Value from "../../value";
import { Container, Wrapper, Title, Bar, ProgressBar } from "./style.js";

const Goal = ({ name, icon, finalValue, color }) => {
  return (
    <Container>
      <IconBox icon={icon} color={color}></IconBox>
      <Wrapper>
        <Title>{name}</Title>
        <Bar>
          <ProgressBar></ProgressBar>
        </Bar>
      </Wrapper>
      <Value value={finalValue}></Value>
    </Container>
  );
};

export default Goal;
