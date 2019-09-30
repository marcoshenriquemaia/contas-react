import React from "react";
import { Container, ButtonAdd, Text } from "./style";
import Tag from "./tag";
import IconType from "../shared/icon-type";

const TagBox = () => {
  return (
    <Container>
      <Tag conteudo="Testando"></Tag>
      <ButtonAdd>
        <Text>Adicionar</Text>
        <IconType icon="plus"></IconType>
      </ButtonAdd>
    </Container>
  );
};

export default TagBox;
