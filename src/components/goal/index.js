import React from "react";
import IconBox from "../icon-box";
import Value from "../value";
import { Container, Wrapper, Title, Bar, ProgressBar } from "./style.js";

const Goal = ({title, icon, value}) => {
  return (
    <Container>
      <IconBox icon={icon}></IconBox>
      <Wrapper>
        <Title>{title}</Title>
        <Bar>
          <ProgressBar></ProgressBar>
        </Bar>
      </Wrapper>
      <Value value={value}></Value>
    </Container>
  );
};

export default Goal;
