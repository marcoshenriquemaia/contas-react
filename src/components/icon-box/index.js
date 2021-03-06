import React from 'react'
import { Container } from './style.js'
import IconType from '../shared/icon-type/index.js'

const IconBox = ({icon, color}) =>{
  return(
    <Container color={color}>
      <IconType icon={icon}/>
    </Container>
  )
}

export default IconBox;