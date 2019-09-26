import React, { useState } from 'react'
import { Container, TitleCategory, WrapperCategory, SubTitleCategory } from './style.js'
import IconBox from '../icon-box/index.js'
import ButtonSelector from '../shared/button-selector/index.js'
import SelectableItem from '../selectable-item/index.js'

const categoryItem = {
  category: 'travel',
  subCategory: ['Chácara', 'Praia']
}

const categorys = [categoryItem, categoryItem];

const CategorySelector = () =>{

  const [selecting, setSelecting] = useState(false);
  const [selected, setSelected] = useState(categoryItem);

  return(
     selecting ? <Container onClick={() => setSelecting(false)} selecting={selecting}> 
      <SelectableItem categorys={categorys}></SelectableItem>
      <SelectableItem></SelectableItem>
      <SelectableItem></SelectableItem>
      <SelectableItem></SelectableItem>
      <SelectableItem></SelectableItem>
     </Container> 
     : 
     <Container onClick={() => setSelecting(true)} selecting={selecting} >
      <IconBox icon={selected.category}></IconBox>
      <WrapperCategory>
        <TitleCategory>{selected.category}</TitleCategory>
        <SubTitleCategory>{selected.subCategory[0]}</SubTitleCategory>
      </WrapperCategory>
      <ButtonSelector></ButtonSelector>
    </Container> 
  )
}

export default CategorySelector;
