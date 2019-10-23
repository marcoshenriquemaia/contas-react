import React, { useState} from 'react'
import { Container, ValueField, Dialer, Key, Currency } from './style'
import NavHeader from '../NavHeader'
import IconType from '../shared/icon-type'
import { Button } from '../goals-list/style'
import formatReal from '../utils/format-real'
import ModalExpanse from '../modal-expanse'

const DialerBigger = () =>{
  const [dialerValue, setDialerValue] = useState('');
  const [headerType, setHeaderType] = useState('expanse');
  const [showExpanseModal, setShowExpanseModal] = useState(false);

  const backspaceNumber = () =>{
    const numberArray = [...dialerValue];
    numberArray.pop();
    setDialerValue(numberArray.join(''))
  }

  const handleClickButton = e =>{
    if (!dialerValue) return;
    setShowExpanseModal(true)
  }

  return(
    <Container>
       {showExpanseModal && <ModalExpanse headerType={headerType} setHeaderType={setHeaderType} dialerValue={formatReal(dialerValue)}/>}
      <NavHeader headerType={headerType} setHeaderType={setHeaderType}></NavHeader>
      <ValueField headerType={headerType}><Currency>R$</Currency>{ formatReal(dialerValue) }</ValueField>
      <Dialer>
        <Key onClick={() => setDialerValue(`${dialerValue}1`)}>1</Key>
        <Key onClick={() => setDialerValue(`${dialerValue}2`)}>2</Key>
        <Key onClick={() => setDialerValue(`${dialerValue}3`)}>3</Key>
        <Key onClick={() => setDialerValue(`${dialerValue}4`)}>4</Key>
        <Key onClick={() => setDialerValue(`${dialerValue}5`)}>5</Key>
        <Key onClick={() => setDialerValue(`${dialerValue}6`)}>6</Key>
        <Key onClick={() => setDialerValue(`${dialerValue}7`)}>7</Key>
        <Key onClick={() => setDialerValue(`${dialerValue}8`)}>8</Key>
        <Key onClick={() => setDialerValue(`${dialerValue}9`)}>9</Key>
        <Key onClick={() => setDialerValue(`${dialerValue}0`)}>0</Key>
        <IconType icon='backspace' onClick={() => backspaceNumber()}></IconType>
      </Dialer>
      <Button onClick={handleClickButton}>Continuar</Button>
    </Container>
  )

}

export default DialerBigger;