import React, { useState, useContext, useEffect } from "react";
import { Container, ContainerExpanses } from "./style";
import TotalValue from "../../components/total-value";
import ExpansesBox from "../../components/expanses-box";
import ExpansesContext from "../../components/context-expanses";

const Expanses = () => {
  const {expansesInformation, setExpansesInformation} = useContext(ExpansesContext);
  const [totalValueExpanse, setTotalValueExpanse] = useState(0);

  useEffect(() =>{
    const newValue = expansesInformation.reduce((acumulator, item) =>{
      const { value } = item;
      const valueReplaced = parseFloat(value.replace('.', '').replace(',', '.'));
      return acumulator + valueReplaced;
    }, 0)
    setTotalValueExpanse(newValue.toFixed(2));
  }, [expansesInformation])

  return (
      <Container>
        <TotalValue totalValueExpanse={totalValueExpanse}/>
        <ContainerExpanses>
          <ExpansesBox expansesInformation={expansesInformation}></ExpansesBox>
        </ContainerExpanses>
      </Container>
  );
};

export default Expanses;
