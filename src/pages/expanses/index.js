import React, { useContext } from "react";
import { Container, ContainerExpanses } from "./style";
import TotalValue from "../../components/total-value";
import ExpansesBox from "../../components/expanses-box";
import AppContext from "../../context/app-context"

const Expanses = () => {
  const { store } = useContext(AppContext);
  
  return (
    <Container onClick={() => console.log(store)}>
      <TotalValue />
      <ContainerExpanses>
        <ExpansesBox></ExpansesBox>
      </ContainerExpanses>
    </Container>
  );
};

export default Expanses;
