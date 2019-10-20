import React, { useState, useContext } from "react";
import { Container, ContainerExpanses } from "./style";
import TotalValue from "../../components/total-value";
import ExpansesBox from "../../components/expanses-box";
import ExpansesContext from "../../components/context-expanses";

const Expanses = () => {
  const {expansesInformation, setExpansesInformation} = useContext(ExpansesContext);

  console.log(expansesInformation);
  return (
      <Container>
        <TotalValue />
        <ContainerExpanses>
          <ExpansesBox expansesInformation={expansesInformation}></ExpansesBox>
        </ContainerExpanses>
      </Container>
  );
};

export default Expanses;
