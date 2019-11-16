import React from 'react'
import { Container, InputPortions, PrefixPortions } from './style'
 
const PortionsBox = ({setPortionsValue}) =>{

  return(
    <Container>
      <InputPortions></InputPortions>
      <PrefixPortions>X</PrefixPortions>
    </Container>
  )
}

export default PortionsBox;