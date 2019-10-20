import React from 'react'
import { Container, Text } from './style'
import IconType from '../../shared/icon-type'

const Tag = ({conteudo, tags, index, setTags}) =>{

  const handleClickIconClose = ({target}) =>{
    const idTag = target.getAttribute('id');
    const newTags = tags.filter((tag, index) =>{
      return index != idTag;
    })
    setTags(newTags);
  }

  return(
    <Container>
      <Text>{conteudo}</Text>
      <IconType icon='close' id={index} onClick={handleClickIconClose}></IconType>
    </Container>
  )
}

export default Tag;