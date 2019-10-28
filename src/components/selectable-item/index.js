import React, { useEffect } from 'react'
import { Container, WrapperText, Title, SubTitle } from './style'
import IconBox from '../icon-box'

const SelectableItem = ({icon, title, subTitle, children, color, delay, ...rest}) =>{
  return(
    <Container {...rest} delay={delay}>
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