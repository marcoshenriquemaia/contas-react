import React, { useState } from "react";
import {
  Container,
  BoxModal,
  NameField,
  FinishGoalWrapper,
  TitleFinishGoal,
  DateField
} from "./style";
import CategorySelector from "../category-selector";
import Dialer from "../dialer";
import { Button } from "../goals-list/style";

const ModalGoal = ({ setStore, setShowGoals }) => {
  const [dialerValue, setDialerValue] = useState("");
  const [categorySelected, setCategorySelected] = useState({});
  const [goalName, setGoalName] = useState("");
  const [finalDate, setFinalDate] = useState("");

  const handleClickButton = () => {
    setStore({
      type: "ADD_GOAL",
      payload: {
        type: categorySelected,
        name: goalName,
        finalDate,
        finalValue: dialerValue
      }
    });
    setShowGoals(false);
  };

  const handleOnChangeNameField = ({ target: { value } }) => setGoalName(value);
  const handleOnChangeDate = ({ target: { value } }) => setFinalDate(value);

  return (
    <Container>
      <BoxModal>
        <CategorySelector
          type="expansesCategorys"
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
        <NameField
          placeholder="Nome da Meta"
          onChange={handleOnChangeNameField}
          value={goalName}
        />
        <FinishGoalWrapper>
          <TitleFinishGoal>Final da meta</TitleFinishGoal>
          <DateField type="date" onChange={handleOnChangeDate} />
        </FinishGoalWrapper>
        <Dialer
          type="small"
          value={dialerValue}
          setValue={setDialerValue}
        ></Dialer>
        <Button onClick={handleClickButton}> Criar Meta</Button>
      </BoxModal>
    </Container>
  );
};

export default ModalGoal;
