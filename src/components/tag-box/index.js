import React from "react";
import { Container, ButtonAdd, Text, Input } from "./style";
import Tag from "./tag";
import IconType from "../shared/icon-type";

const TagBox = ({setTagList, tagList}) => {
  return (
    <Container>
      <Tag></Tag>
      <Input />
      <ButtonAdd>
        <Text>Adicionar</Text>
        <IconType icon="plus"></IconType>
      </ButtonAdd>
    </Container>
  );
};

export default TagBox;
