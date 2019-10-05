import React from 'react'
import { Container, ContainerExpanses, ExpansesBox } from './style'
import TotalValue from '../../components/total-value'

const Expanses = () =>{
  return(
    <Container>
      <TotalValue/>
      <ContainerExpanses>
        <ExpansesBox></ExpansesBox>
        <ExpansesBox></ExpansesBox>
        <ExpansesBox></ExpansesBox>
        <ExpansesBox></ExpansesBox>
      </ContainerExpanses>
    </Container>
  )
}

export default Expanses;