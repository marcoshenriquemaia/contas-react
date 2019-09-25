import React from 'react'
import { Container, ValueField, Dialer, Key, Currency } from './style'
import NavHeader from '../NavHeader'
import IconType from '../shared/icon-type'
import { Button } from '../goals-list/style'

const DialerBigger = () =>{
  return(
    <Container>
      <NavHeader></NavHeader>
      <ValueField><Currency>R$</Currency>100.000,00</ValueField>
      <Dialer>
        <Key>1</Key>
        <Key>2</Key>
        <Key>3</Key>
        <Key>4</Key>
        <Key>5</Key>
        <Key>6</Key>
        <Key>7</Key>
        <Key>8</Key>
        <Key>9</Key>
        <Key>0</Key>
        <IconType icon='backspace'></IconType>
      </Dialer>
      <Button>Continuar</Button>
    </Container>
  )

}

export default DialerBigger;