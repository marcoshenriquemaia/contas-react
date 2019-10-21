import React, { useEffect } from 'react'
import { Container, WrapperText, Title, SubTitle } from './style'
import IconBox from '../icon-box'

const SelectableItem = ({icon, title, subTitle, children, ...rest}) =>{
  return(
    <Container {...rest}>
      <IconBox icon={icon}></IconBox>
      <WrapperText>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </WrapperText>
      {children}
    </Container>

  )
}

export default SelectableItem;