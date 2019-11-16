import React from "react";
import { Container, ContainerExpanses } from "./style";
import TotalValue from "../../components/total-value";
import ExpansesBox from "../../components/expanses-box";

const Expanses = () => {
  return (
    <Container>
      <TotalValue />
      <ContainerExpanses>
        <ExpansesBox></ExpansesBox>
      </ContainerExpanses>
    </Container>
  );
};

export default Expanses;
