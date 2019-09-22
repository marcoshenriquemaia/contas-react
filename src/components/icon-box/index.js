import React from 'react'
import { Container } from './style.js'

const IconBox = ({cor, ...rest}) =>{
  return(
    <Container cor={cor} active={''}></Container>
  )
}

export default IconBox;