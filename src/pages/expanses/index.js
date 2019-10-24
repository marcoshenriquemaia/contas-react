import React, { useState, useContext, useEffect } from "react";
import { Container, ContainerExpanses } from "./style";
import TotalValue from "../../components/total-value";
import ExpansesBox from "../../components/expanses-box";
import ExpansesContext from "../../components/context-expanses";

const Expanses = () => {
  const {arrayWallet, setArrayWallet} = useContext(ExpansesContext);
  const {expansesInformation, setExpansesInformation} = useContext(ExpansesContext);
  const [totalValueExpanse, setTotalValueExpanse] = useState(0);
  const [arrayDates, setArrayDates] = useState([]);


  useEffect(() =>{
    const newDate = expansesInformation.map(({dateExpanse}) =>{return dateExpanse});
    const filteredArrayDate = newDate.filter((date, index) => {return newDate.indexOf(date) === index});
    setArrayDates(filteredArrayDate.sort());
  }, [])
  
  
  useEffect(() =>{
    const newValue = expansesInformation.reduce((acumulator, item) =>{
      const { value } = item;
      const valueReplaced = parseFloat(value.replace('.', '').replace(',', '.'));
      return acumulator + valueReplaced;
    }, 0)
    setTotalValueExpanse(newValue.toFixed(2));
  }, [expansesInformation]);

  //fazer uma logica para somar os valores na carteira. 

  useEffect(() =>{
    expansesInformation.map(expanse =>{
      arrayWallet.reduce((acumulator, wallet) =>{
        return wallet.value = acumulator + 100;
      }, 0)
      setArrayWallet([...arrayWallet])
    })
  }, []);

  return (
      <Container>
        <TotalValue totalValueExpanse={totalValueExpanse}/>
        <ContainerExpanses>
          {arrayDates.map((date, index) =>
            <ExpansesBox key={`key-expanseBox-${index}`} expansesInformation={expansesInformation} date={date}></ExpansesBox>)}
        </ContainerExpanses>
      </Container>
  );
};

export default Expanses;
