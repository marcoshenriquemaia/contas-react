import React, { useState} from 'react'
import { Container, ValueField, Key, Currency } from './style'
import NavHeader from '../NavHeader'
import IconType from '../shared/icon-type'
import { Button } from '../goals-list/style'
import formatReal from '../utils/format-real'
import ModalExpanse from '../modal-expanse'
import Dialer from '../dialer'

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
      <Dialer setValue={setDialerValue} type='bigger'/>
      <Button onClick={handleClickButton}>Continuar</Button>
    </Container>
  )

}

export default DialerBigger;