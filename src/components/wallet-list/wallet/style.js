import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 3.2em;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  padding: 5px;
  flex-shrink: 0;
`;

export const WrapperType = styled.div`
  width: 40%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 1em;
  margin-right: 1em;
`;

export const Type = styled.h1`
  color: #707070;
  font-weight: 700;
`;

export const Name = styled.h2`
  font-size: 0.8em;
  font-weight: 400;
`;
