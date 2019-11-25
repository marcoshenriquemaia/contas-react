import React from "react";
import { Container, Text } from "./style";
import IconType from "../../shared/icon-type";

const Tag = ({ conteudo }) => {
  return (
    <Container>
      <Text>{conteudo}</Text>
      <IconType></IconType>
    </Container>
  );
};

export default Tag;
