import React, { useState } from "react";
import { Container, ButtonAdd, Text, Input } from "./style";
import Tag from "./tag";
import IconType from "../shared/icon-type";

const TagBox = ({setTagList, tagList}) => {
  const [tags, setTags] = useState([]);
  const [selectingTag, setSelectingTag] = useState(false);

  const handleOnBlur = ({target}) =>{
    setSelectingTag(false);
    if (target.value == '') return;
    setTags([...tags, target.value]);
    setTagList([...tags]);
    target.value = '';
  }
  const handleOnFocus = () =>{
    setSelectingTag(true);
  }

  const handlePress = ({key, target}) =>{
    const tagsControl = [...tags];
    if (target.value != '') return;
    if (key === "Backspace") {
      tagsControl.pop();
      setTags(tagsControl);
    }
  }

  return (
    <Container>
      {tags.map((tag, index) =>  <Tag key={`key-tag${index}`} setTags={setTags} index={index} conteudo={tag} tags={tags} setTags={setTags}></Tag>)}
      <Input onBlur={handleOnBlur} onFocus={handleOnFocus} onKeyDown={handlePress}/>
      { selectingTag && <ButtonAdd>
        <Text>Adicionar</Text>
        <IconType icon="plus"></IconType>
      </ButtonAdd>}
    </Container>
  );
};

export default TagBox;
