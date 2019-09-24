import React from 'react'
import { Container, Revenue, Expanse, Transfer } from './style'

const NavHeader = () =>{
  return(
    <Container>
      <Revenue>Receita</Revenue>
      <Expanse>Despesa</Expanse>
      <Transfer>Transferência</Transfer>
    </Container>
  )
}

export default NavHeader;