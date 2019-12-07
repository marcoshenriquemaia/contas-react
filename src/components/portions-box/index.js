import React from 'react'
import { Container, InputPortions, PrefixPortions } from './style'
 
const PortionsBox = ({setPortionsValue}) =>{
  const handleOnChangePortions = ({target}) =>{
    setPortionsValue(target.value)
  }

  return(
    <Container onChange={handleOnChangePortions}>
      <InputPortions></InputPortions>
      <PrefixPortions>X</PrefixPortions>
    </Container>
  )
}

export default PortionsBox;