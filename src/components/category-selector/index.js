import React, { useState, useEffect } from "react";
import { Container, WapperSelector } from "./style.js";
import SelectableItem from "../selectable-item/index.js";
import ButtonSelector from "../shared/button-selector/index.js";
import { typesSelectableDictionarie } from "../dictionaries/index.js";
import api from "../../services/api";

const CategorySelector = props => {
  const {
    setCategory,
    setWalletSelected,
    setCategorySelected,
    type,
    arrayWallet,
    goalsCategorys
  } = props;
  const [selecting, setSelecting] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [categorys, setCategorys] = useState([]);

  const selectables = {
    wallet: arrayWallet,
    category: categorys,
    goal: goalsCategorys
  };

  const getExapanses = async () =>{
    const categorys = await api.get("/users");
    setCategorys(categorys.data[0].expansesCategorys);
  }

  useEffect(() => {
    getExapanses();
  }, []);

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
  };

  return (
    <WapperSelector>
      <Container selecting={selecting} type={type}>
        <SelectableItem
          icon={
            !selected ? typesSelectableDictionarie[type].icon : selected.icon
          }
          title={
            !selected ? typesSelectableDictionarie[type].title : selected.title
          }
          subTitle={
            !selected ? typesSelectableDictionarie[type].name : selected.name
          }
          color={
            !selected ? typesSelectableDictionarie[type].color : selected.color
          }
          onClick={() => handleOnClick()}
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
              color={item.color}
              onClick={() => handleSelect(item)}
              delay={index * 50}
            ></SelectableItem>
          ))}
      </Container>
    </WapperSelector>
  );
};

export default CategorySelector;
