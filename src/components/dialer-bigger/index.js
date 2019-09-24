import React from 'react'
import { Container, ValueField, Dialer, Key } from './style'
import NavHeader from '../NavHeader'
import IconType from '../shared/icon-type'
import { Button } from '../goals-list/style'

const DialerBigger = () =>{
  return(
    <Container>
      <NavHeader></NavHeader>
      <ValueField></ValueField>
      <Dialer>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <Key></Key>
        <IconType icon='backspace'></IconType>
      </Dialer>
      <Button>Continuar</Button>
    </Container>
  )

}

export default DialerBigger;