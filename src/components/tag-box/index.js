import React, { useState } from "react";
import { Container, ButtonAdd, Text, Input } from "./style";
import Tag from "./tag";
import IconType from "../shared/icon-type";

const TagBox = () => {
  const [tags, setTags] = useState(['marcos', 'clarice']);
  console.log(tags)
  return (
    <Container>
      {tags.map((tag, index) =>  <Tag key={`key-tag${index}`} conteudo={tag}></Tag>)}
      {/* <Input onBlur={({target}) => setTags([...tags, target.value])}/> */}
      <ButtonAdd>
        <Text>Adicionar</Text>
        <IconType icon="plus"></IconType>
      </ButtonAdd>
    </Container>
  );
};

export default TagBox;
