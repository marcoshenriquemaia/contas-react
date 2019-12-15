import React, { useState } from "react";
import { Container, WapperSelector } from "./style.js";
import SelectableItem from "./selectable-item";
import Categorys, { EXPANSES_CATEGORY } from "./default-categorys";

const CategorySelector = ({ type, setCategorySelected, categorySelected, store, position }) => {
  const [selecting, setSelecting] = useState(false);
  const { walletList } = store;
  const CategoryList = {
    categorys: Categorys[EXPANSES_CATEGORY],
    walletList,
  }


  const handleClickSelect = ({ title, subTitle, icon, color }) => {
    setCategorySelected({ category: title, subCategory: [subTitle], icon, color });
    setSelecting(!selecting);
  };
  
  const handleClickContainer = () => {
    setSelecting(!selecting);
  };
  
  return (
    <WapperSelector>
      <Container
        selecting={selecting}
        onClick={handleClickContainer}
        itemAmount={CategoryList[type].length}
        position={position}
      >
        <SelectableItem
          title={categorySelected.category}
          subTitle={categorySelected.subCategory}
          icon={categorySelected.icon}
        />
        {selecting &&
          CategoryList[type].map((item, index) => (
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
