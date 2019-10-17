import React, { useState } from 'react'
import { Container, BoxModal, NameField, FinishGoalWrapper, TitleFinishGoal, DateField } from './style'
import CategorySelector from '../category-selector'
import Dialer from '../dialer'
import { Button } from "../goals-list/style";

const ModalGoal = ({setShowGoals}) =>{
  const [valueNameField, setValueNameField] = useState('');

  return(
    <Container onClick={() => setShowGoals(false)}>
      <BoxModal onClick={e => {e.stopPropagation()}}>
        <CategorySelector />
        <NameField placeholder='Nome da Meta' value={valueNameField} onChange={({target: {value}}) => setValueNameField(value)} />
        <FinishGoalWrapper>
          <TitleFinishGoal>Final da meta</TitleFinishGoal>
          <DateField type='date'/>
        </FinishGoalWrapper>
        <Dialer></Dialer>
      <Button onClick={() => setShowGoals(false)}> Criar Meta</Button>
      </BoxModal>
    </Container>
  )
}

export default ModalGoal;