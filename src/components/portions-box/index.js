import React from 'react'
import { Container, InputPortions, PrefixPortions } from './style'
 
const PortionsBox = () =>{
  return(
    <Container>
      <InputPortions type='number' placeholder='1'></InputPortions>
      <PrefixPortions>X</PrefixPortions>
    </Container>
  )
}

export default PortionsBox;