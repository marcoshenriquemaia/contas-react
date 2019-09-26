import React from 'react'
import { Container, BoxModal, NameField, FinishGoalWrapper, TitleFinishGoal, DateField } from './style'
import CategorySelector from '../category-selector'
import Dialer from '../dialer'
import { Button } from "../goals-list/style";


const ModalGoal = ({setShowGoals}) =>{
  return(
    <Container onClick={() => setShowGoals(false)}>
      <BoxModal onClick={e => e.stopPropagation()}>
        <CategorySelector></CategorySelector>
        <NameField placeholder='Nome da Meta'></NameField>
        <FinishGoalWrapper>
          <TitleFinishGoal>Final da meta</TitleFinishGoal>
          <DateField type='date'></DateField>
        </FinishGoalWrapper>
        <Dialer></Dialer>
      <Button onClick={() => setShowGoals(false)}> Criar Meta</Button>
      </BoxModal>
    </Container>
  )
}

export default ModalGoal;