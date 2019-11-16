import React, { useState } from "react";
import { Container, WapperSelector } from "./style.js";
import SelectableItem from "./selectable-item";
import defaultCategorys from "./default-categorys";

const CategorySelector = ({ type }) => {
  const [selecting, setSelecting] = useState(false);
  const [selected, setSelected] = useState({});
  const handleClickSelect = ({ title, subTitle, icon }) => {
    setSelected({ title, subTitle, icon });
    setSelecting(!selecting);
  };
  const handleClickContainer = e => {
    if (selecting) return;
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
          title={selected.title}
          subTitle={selected.subTitle}
          icon={selected.icon}
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
                  icon: item.icon
                })
              }
            />
          ))}
      </Container>
    </WapperSelector>
  );
};

export default CategorySelector;
