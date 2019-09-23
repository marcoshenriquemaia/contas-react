import React from 'react'
import { Container, BoxModal, NameField, FinishGoalWrapper, TitleFinishGoal, DateField } from './style'
import CategorySelector from '../category-selector'
import Dialer from '../dialer'

const ModalGoal = () =>{
  return(
    <Container>
      <BoxModal>
        <CategorySelector></CategorySelector>
        <NameField></NameField>
        <FinishGoalWrapper>
          <TitleFinishGoal>Final da meta</TitleFinishGoal>
          <DateField></DateField>
        </FinishGoalWrapper>
        <Dialer></Dialer>
      </BoxModal>
    </Container>
  )
}

export default ModalGoal;