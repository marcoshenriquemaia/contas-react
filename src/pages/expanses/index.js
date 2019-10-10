import React from 'react'
import { Container, ContainerExpanses } from './style'
import TotalValue from '../../components/total-value'
import Expanse from '../../components/expanse'
import ExpansesBox from '../../components/expanses-box'

const Expanses = () =>{
  return(
    <Container>
      <TotalValue/>
      <ContainerExpanses>
        <ExpansesBox></ExpansesBox>
        <ExpansesBox></ExpansesBox>
        <ExpansesBox></ExpansesBox>
        <ExpansesBox></ExpansesBox>
        <ExpansesBox></ExpansesBox>
      </ContainerExpanses>
    </Container>
  )
}

export default Expanses;