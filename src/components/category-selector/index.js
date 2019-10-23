import React, { useState } from "react";
import { Container, WapperSelector } from "./style.js";
import SelectableItem from "../selectable-item/index.js";
import ButtonSelector from "../shared/button-selector/index.js";

const categoryItem = {
  title: "Categoria",
  name: 'Praia',
};


const categorys = [categoryItem, categoryItem, categoryItem];

const CategorySelector = props => {
  const {setCategory, setSubCategory, setWalletSelected, setCategorySelected, type, setArrayWallet, arrayWallet} = props;
  const [selecting, setSelecting] = useState(false);
  const [selected, setSelected] = useState(undefined);

  const selectables = {
    wallet: arrayWallet,
    category: categorys
  }

  const handleSelect = item => {
    type == 'wallet' && setWalletSelected({title: item.title, name: item.name, icon: item.icon});
    type == 'category' && setCategorySelected({title: item.title, name: item.name, icon: item.icon});
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
          icon={selected ? selected.icon : (type === 'wallet' ? 'wallet' : 'cateogory')}
          title={selected ? selected.title : (type === 'wallet' ? 'Carteira' : 'Categoria')}
          subTitle={selected ? selected.name : (type === 'wallet' ? 'Nome' : 'SubCategoria')}
          onClick={handleOnClick}
        >
          <ButtonSelector />
        </SelectableItem>
        {selecting &&
          selectables[type].map((item, index) => (
            <SelectableItem
              key={`key-category-${index}`}
              icon={item.icon}
              title={item.title}
              subTitle={item.name}
              onClick={() => handleSelect(item)}
            ></SelectableItem>
          ))}
      </Container>
    </WapperSelector>
  );
};

export default CategorySelector;


