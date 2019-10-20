import React from 'react'
import { Container, DateText } from './style'
import Expanse from '../expanse'

const ExpansesBox = ({expansesInformation}) =>{
  return(
    <Container>
      <DateText>09/10</DateText>
      {expansesInformation.map(expanse => <Expanse expanse={expanse}></Expanse>)}
    </Container>
  )
}

export default ExpansesBox;