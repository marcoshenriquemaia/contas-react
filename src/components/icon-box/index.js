import React from 'react'
import { Container } from './style.js'
import IconType from '../shared/icon-type/index.js'

const IconBox = ({cor, icon}) =>{
  return(
    <Container cor={cor} active={''}>
      <IconType icon={icon}/>
    </Container>
  )
}

export default IconBox;