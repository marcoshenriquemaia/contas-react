import React from 'react'
import { Container, InputPortions, PrefixPortions } from './style'
 
const PortionsBox = ({setPortionsValue}) =>{
  const handleOnChangePortions = ({target: {value}}) =>{
    setPortionsValue(value)
  }

  return(
    <Container>
      <InputPortions type='number' placeholder='1' onChange={handleOnChangePortions}></InputPortions>
      <PrefixPortions>X</PrefixPortions>
    </Container>
  )
}

export default PortionsBox;