import React from 'react'
import { Container, WrapperText, Title, SubTitle } from './style'
import IconBox from '../icon-box'

const SelectableItem = () =>{
  return(
    <Container>
      <IconBox></IconBox>
      <WrapperText>
        <Title>Viagem</Title>
        <SubTitle>Praia</SubTitle>
      </WrapperText>
    </Container>

  )
}

export default SelectableItem;