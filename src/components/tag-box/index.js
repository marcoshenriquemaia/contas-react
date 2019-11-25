import React, { useState } from "react";
import { Container, ButtonAdd, Text, Input } from "./style";
import Tag from "./tag";
import IconType from "../shared/icon-type";

const TagBox = ({ setTagList, tagList }) => {
  const [tagValue, setTagValue] = useState('');

  const removeTag = () => {
    if (tagValue != "") return;
    const newTagList = tagList;
    tagList[0] && tagList.pop();
    setTagList([...newTagList]);
  };

  const handleOnClick = () => {
    tagValue !== '' && setTagList([...tagList, tagValue]);
    setTagValue("");
  };

  const handleOnKeyDown = ({ target: { value }, key }) => {
    switch (key) {
      case "Backspace":
        return removeTag(value);
      case "Tab":
        value !== '' && setTagList([...tagList, value]);
        setTagValue("");
        return;
    }
  };

  const handleOnChange = ({target: {value}}) =>{
    setTagValue(value);
  }

  return (
    <Container>
      {tagList.map((tag, index) => (
        <Tag key={`key-tag${index}`} conteudo={tag} />
      ))}
      <Input value={tagValue} onChange={handleOnChange} onKeyDown={handleOnKeyDown}/>
      <ButtonAdd onClick={handleOnClick}>
        <Text>Adicionar</Text>
        <IconType icon="plus"></IconType>
      </ButtonAdd>
    </Container>
  );
};

export default TagBox;
