import React, { useEffect } from 'react'
import { Container, WrapperText, Title, SubTitle } from './style'
import IconBox from '../icon-box'

const SelectableItem = ({icon, title, subTitle, children, color, ...rest}) =>{
  return(
    <Container {...rest}>
      <IconBox icon={icon} cor={color}></IconBox>
      <WrapperText>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </WrapperText>
      {children}
    </Container>

  )
}

export default SelectableItem;