import React, { useState } from 'react'
import { Container, BoxModal, NameField, FinishGoalWrapper, TitleFinishGoal, DateField } from './style'
import CategorySelector from '../category-selector'
import Dialer from '../dialer'
import { Button } from "../goals-list/style";

const ModalGoal = () =>{

  return(
    <Container >
      <BoxModal >
        <CategorySelector type='expansesCategorys'/>
        <NameField />
        <FinishGoalWrapper>
          <TitleFinishGoal>Final da meta</TitleFinishGoal>
          <DateField />
        </FinishGoalWrapper>
        <Dialer ></Dialer>
      <Button > Criar Meta</Button>
      </BoxModal>
    </Container>
  )
}

export default ModalGoal;