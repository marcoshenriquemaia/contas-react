import React from "react";
import { Container, DateText } from "./style";
import Expanse from "../expanse";

const ExpansesBox = ({ expansesInformation, date }) => {
  const dateSeparate = date.split("-");
  const brazilianDate = `${dateSeparate[2]}/${dateSeparate[1]}/${
    dateSeparate[0]
  }`;
  return (
    <Container>
      <DateText>{brazilianDate}</DateText>
      {expansesInformation.map(
        (expanse, index) =>
          expanse.dateExpanse === date && (
            <Expanse expanse={expanse} key={`key-expanse-${index}`}></Expanse>
          )
      )}
    </Container>
  );
};

export default ExpansesBox;
