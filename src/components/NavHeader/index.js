import React from 'react'
import { Container, Revenue, Expanse, Transfer } from './style'

const NavHeader = prop =>{
  const { headerType, setHeaderType } = prop
  return(
    <Container>
      <Revenue headerType={headerType} onClick={() => setHeaderType('revenue')}>Receita </Revenue>
      <Expanse headerType={headerType} onClick={() => setHeaderType('expanse')}>Despesa</Expanse>
      <Transfer headerType={headerType} onClick={() => setHeaderType('transfer')}>Transferência</Transfer>
    </Container>
  )
}

export default NavHeader;