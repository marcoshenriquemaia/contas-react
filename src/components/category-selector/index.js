import React, { useState } from "react";
import { Container, WapperSelector } from "./style.js";
import SelectableItem from "./selectable-item";
import defaultCategorys from "./default-categorys";

const CategorySelector = ({ type }) => {
  const [selecting, setSelecting] = useState(false);
  const [selected, setSelected] = useState({});
  const handleClickSelect = ({title, subTitle}) => {
    setSelected({ title, subTitle });
    setSelecting(!selecting);
  };
  const handleClickContainer = (e) =>{
    if (selecting) return;
    setSelecting(!selecting);
  }
  return (
    <WapperSelector>
      <Container selecting={selecting} onClick={handleClickContainer}>
        <SelectableItem title={selected.title} subTitle={selected.subTitle} />
        {selecting &&
          defaultCategorys[type].map((item, index) => (
            <SelectableItem
              key={`selectable-key-${index}`}
              icon={item.icon}
              title={item.title}
              subTitle={item.name}
              index={index}
              onClick={()=> handleClickSelect({title: item.title, subTitle: item.name})}
            />
          ))}
      </Container>
    </WapperSelector>
  );
};

export default CategorySelector;
