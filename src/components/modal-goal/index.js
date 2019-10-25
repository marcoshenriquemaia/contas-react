import React, { useState } from 'react'
import { Container, BoxModal, NameField, FinishGoalWrapper, TitleFinishGoal, DateField } from './style'
import CategorySelector from '../category-selector'
import Dialer from '../dialer'
import { Button } from "../goals-list/style";

const ModalGoal = ({setShowGoals, setArrayGols, oldValue, goalsCategorys, type}) =>{
  const [dialerValue, setDialerValue] = useState('');
  const [nameGoal, setNameGoal] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  const goalInformation = {
    title: nameGoal,
    icon: 'wallet',
    value: parseInt(dialerValue),
    date: {
      create: '10-04-2019',
      end: dateValue,
    },
    category: {
      title: category,
      name: subCategory,
      icon: 'travel',
    },
  }

  const handleOnChangeNameField = ({target: {value}}) =>{
    setNameGoal(value);
  }

  const handleOnChangeDateFild = ({target: {value}}) =>{
    setDateValue(value);
  }

  const handleOnClickButton = () =>{
    setShowGoals(false);
    setArrayGols([...oldValue, goalInformation]);
  }

  return(
    <Container onClick={() => setShowGoals(false)}>
      <BoxModal onClick={e => {e.stopPropagation()}}>
        <CategorySelector setCategory={setCategory} setSubCategory={setSubCategory} goalsCategorys={goalsCategorys} type={type}/>
        <NameField placeholder='Nome da Meta' onChange={handleOnChangeNameField} />
        <FinishGoalWrapper>
          <TitleFinishGoal>Final da meta</TitleFinishGoal>
          <DateField type='date' onChange={handleOnChangeDateFild}/>
        </FinishGoalWrapper>
        <Dialer setValue={setDialerValue} value={dialerValue}></Dialer>
      <Button onClick={handleOnClickButton}> Criar Meta</Button>
      </BoxModal>
    </Container>
  )
}

export default ModalGoal;