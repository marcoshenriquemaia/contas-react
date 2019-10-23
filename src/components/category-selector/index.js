import React, { useState } from "react";
import { Container, WapperSelector } from "./style.js";
import SelectableItem from "../selectable-item/index.js";
import ButtonSelector from "../shared/button-selector/index.js";

const categoryItem = {
  category: "Categoria",
  subCategory: ['Nome',"Chácara", "Praia"]
};


const categorys = [
  categoryItem,
  { ...categoryItem, subCategory: ["Praia"] },
  { ...categoryItem, subCategory: ["Clube"] },
  categoryItem,
  categoryItem,
  categoryItem,
  categoryItem,
  categoryItem,
  categoryItem,
];

const CategorySelector = props => {
  const {setCategory, setSubCategory, setWalletSelected, setCategorySelected, type} = props;
  const [selecting, setSelecting] = useState(false);
  const [selected, setSelected] = useState(categoryItem);

  const handleSelect = item => {
    type == 'wallet' && setWalletSelected({category: item.category, subCategory: item.subCategory[0], icon: item.category});
    type == 'category' && setCategorySelected({category: item.category, subCategory: item.subCategory[0], icon: item.category});
    setSelecting(false);
    setSelected(item);
  };

  const handleOnClick = () =>{
    setSelecting(!selecting);
    !!setCategory && setCategory(selected.category);
    !!setSubCategory && setSubCategory(selected.subCategory[0]);
  }

  return (
    <WapperSelector>
      <Container selecting={selecting}>
        <SelectableItem
          icon={selected.category}
          title={selected.category}
          subTitle={selected.subCategory[0]}
          onClick={handleOnClick}
        >
          <ButtonSelector />
        </SelectableItem>
        {selecting &&
          categorys.map((item, index) => (
            <SelectableItem
              key={`key-category-${index}`}
              icon={item.category}
              title={item.category}
              subTitle={item.subCategory[0]}
              onClick={() => handleSelect(item)}
            ></SelectableItem>
          ))}
      </Container>
    </WapperSelector>
  );
};

export default CategorySelector;


