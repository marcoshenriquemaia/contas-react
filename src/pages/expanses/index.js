import React from 'react'
import { Container, ContainerExpanses, ExpansesBox } from './style'
import TotalValue from '../../components/total-value'
import Expanse from '../../components/expanse'

const Expanses = () =>{
  return(
    <Container>
      <TotalValue/>
      <ContainerExpanses>
        <ExpansesBox>
          <Expanse></Expanse>
        </ExpansesBox>
        <ExpansesBox></ExpansesBox>
        <ExpansesBox></ExpansesBox>
        <ExpansesBox></ExpansesBox>
      </ContainerExpanses>
    </Container>
  )
}

export default Expanses;