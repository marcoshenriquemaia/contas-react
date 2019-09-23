import React from 'react'
import { Container, TitleCategory, WrapperCategory, SubTitleCategory } from './style.js'
import IconBox from '../icon-box/index.js'
import ButtonSelector from '../shared/button-selector/index.js'

const CategorySelector = () =>{
  return(
    <Container>
      <IconBox icon='travel'></IconBox>
      <WrapperCategory>
        <TitleCategory>Categoria</TitleCategory>
        <SubTitleCategory>nome</SubTitleCategory>
      </WrapperCategory>
      <ButtonSelector></ButtonSelector>
    </Container>
  )
}

export default CategorySelector;
