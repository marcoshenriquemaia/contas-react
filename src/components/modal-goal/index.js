import React, { useState } from 'react'
import { Container, BoxModal, NameField, FinishGoalWrapper, TitleFinishGoal, DateField } from './style'
import CategorySelector from '../category-selector'
import Dialer from '../dialer'
import { Button } from "../goals-list/style";

const ModalGoal = () =>{
  const [dialerValue, setDialerValue] = useState('');
  
  return(
    <Container >
      <BoxModal >
        <CategorySelector type='expansesCategorys'/>
        <NameField placeholder='Nome da Meta'/>
        <FinishGoalWrapper>
          <TitleFinishGoal>Final da meta</TitleFinishGoal>
          <DateField type='date'/>
        </FinishGoalWrapper>
        <Dialer type='small' value={dialerValue} setValue={setDialerValue}></Dialer>
      <Button> Criar Meta</Button>
      </BoxModal>
    </Container>
  )
}

export default ModalGoal;