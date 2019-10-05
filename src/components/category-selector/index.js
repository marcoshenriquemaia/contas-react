import React, { useState } from "react";
import { Container, WapperSelector } from "./style.js";
import SelectableItem from "../selectable-item/index.js";
import ButtonSelector from "../shared/button-selector/index.js";

const categoryItem = {
  category: "travel",
  subCategory: ["Chácara", "Praia"]
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
  categoryItem,
  categoryItem,
  categoryItem,
  categoryItem,
];

const CategorySelector = () => {
  const [selecting, setSelecting] = useState(false);
  const [selected, setSelected] = useState(categoryItem);

  const handleSelect = item => {
    setSelecting(false);
    setSelected(item);
  };


  return (
    <WapperSelector>
      <Container selecting={selecting}>
        <SelectableItem
          icon={selected.category}
          title={selected.category}
          subTitle={selected.subCategory[0]}
          onClick={() => setSelecting(!selecting)}
        >
          <ButtonSelector />
        </SelectableItem>
        {selecting &&
          categorys.map(item => (
            <SelectableItem
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
