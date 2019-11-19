import React, { useState } from "react";
import { Container, WapperSelector } from "./style.js";
import SelectableItem from "./selectable-item";
import defaultCategorys from "./default-categorys";

const CategorySelector = ({ type, setCategorySelected, categorySelected }) => {
  const [selecting, setSelecting] = useState(false);

  const handleClickSelect = ({ title, subTitle, icon, color }) => {
  setCategorySelected({ category: title, subCategory: [subTitle], icon, color });
    setSelecting(!selecting);
  };
  const handleClickContainer = e => {
    setSelecting(!selecting);
  };

  return (
    <WapperSelector>
      <Container
        selecting={selecting}
        onClick={handleClickContainer}
        itemAmount={defaultCategorys[type].length}
      >
        <SelectableItem
          title={categorySelected.title}
          subTitle={categorySelected.subTitle}
          icon={categorySelected.icon}
        />
        {selecting &&
          defaultCategorys[type].map((item, index) => (
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
