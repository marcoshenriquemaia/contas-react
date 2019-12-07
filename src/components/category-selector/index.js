import React, { useState } from "react";
import { Container, WapperSelector } from "./style.js";
import SelectableItem from "./selectable-item";
import Categorys from "./default-categorys";

const CategorySelector = ({ type, setCategorySelected, categorySelected }) => {
  const [selecting, setSelecting] = useState(false);

  const handleClickSelect = ({ title, subTitle, icon, color }) => {
  setCategorySelected({ category: title, subCategory: [subTitle], icon, color });
    setSelecting(!selecting);
  };
  const handleClickContainer = e => {
    setSelecting(!selecting);
  };
  console.log(type);
  return (
    <WapperSelector>
      <Container
        selecting={selecting}
        onClick={handleClickContainer}
        itemAmount={Categorys[type].length}
      >
        <SelectableItem
          title={categorySelected.title}
          subTitle={categorySelected.subTitle}
          icon={categorySelected.icon}
        />
        {selecting &&
          Categorys[type].map((item, index) => (
            <SelectableItem
              key={`selectable-key-${index}`}
              icon={item.icon}
              title={item.title}
              subTitle={item.name}
              index={index}
              onClick={() =>
                handleClickSelect({
                  title: item.title,
                  subTitle: item.name,
                  icon: item.icon,
                  color: item.color,
                })
              }
            />
          ))}
      </Container>
    </WapperSelector>
  );
};

export default CategorySelector;
