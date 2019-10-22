import React from 'react'
import { Container, DateText } from './style'
import Expanse from '../expanse'

const ExpansesBox = ({expansesInformation, date}) =>{
  return(
    <Container>
      <DateText>{date}</DateText>
      {expansesInformation.map((expanse, index) => <Expanse expanse={expanse} key={`key-expanse-${index}`}></Expanse>)}
    </Container>
  )
}

export default ExpansesBox;