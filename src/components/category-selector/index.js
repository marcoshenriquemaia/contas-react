import React, { useState } from "react";
import { Container, WapperSelector } from "./style.js";
import SelectableItem from "../selectable-item/index.js";
import ButtonSelector from "../shared/button-selector/index.js";
import { typesSelectableDictionarie } from "../dictionaries/index.js";

const categorys = [
  {
    title: "Supermercado",
    name: "Higiene",
    icon: "supermarket"
  },
  {
    title: "Lazer",
    name: "Cinema",
    icon: "recreation"
  },
  {
    title: "Transporte",
    name: "Uber",
    icon: "transport"
  },
  {
    title: "Educação",
    name: "Material Escola",
    icon: "education"
  },
  {
    title: "Jogos",
    name: "x-box",
    icon: "games"
  },
  {
    title: "Alimentação",
    name: "Fast-food",
    icon: "food"
  }
];

const CategorySelector = props => {
  const {
    setCategory,
    setSubCategory,
    setWalletSelected,
    setCategorySelected,
    type,
    setArrayWallet,
    arrayWallet,
    goalsCategorys
  } = props;
  const [selecting, setSelecting] = useState(false);
  const [selected, setSelected] = useState(undefined);

  const selectables = {
    wallet: arrayWallet,
    category: categorys,
    goal: goalsCategorys
  };

  const handleSelect = item => {
    type == "wallet" &&
      setWalletSelected({
        title: item.title,
        name: item.name,
        icon: item.icon
      });
    type == "category" &&
      setCategorySelected({
        title: item.title,
        name: item.name,
        icon: item.icon
      });
    type == "goal" &&
      setCategory({
        title: item.title,
        name: item.name,
        icon: item.icon
      });
    setSelecting(false);
    setSelected(item);
  };

  const handleOnClick = () => {
    setSelecting(!selecting);
    !!selecting && setCategory(selected.title);
    !!selecting && setSubCategory(selected.name);
  };

  return (
    <WapperSelector>
      <Container selecting={selecting}>
        <SelectableItem
          icon={!selected ? typesSelectableDictionarie[type].icon : selected.icon}
          title={!selected ? typesSelectableDictionarie[type].title : selected.title}
          subTitle={!selected ? typesSelectableDictionarie[type].name : selected.name}
          color={!selected ? typesSelectableDictionarie[type].color : selected.color}
          onClick={() => {handleOnClick()}}
        >
          <ButtonSelector />
        </SelectableItem>
        {selecting &&
          selectables[type].map((item, index) => 
            <SelectableItem
              key={`key-category-${index}`}
              icon={item.icon}
              title={item.title}
              subTitle={item.name}
              color={item.color}
              onClick={() => handleSelect(item)}
            ></SelectableItem>
        )}
      </Container>
    </WapperSelector>
  );
};

export default CategorySelector;
