import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 1em;
`;
export const KeyBox = styled.div`
  width: calc(8.71vh * 3);
  height: calc(8.71vh * 4);
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  & > svg {
    width: 5.91vh;
    height: 5.91vh;
    margin: 1.4vh;
    transform: scale(0.6);
    color: #53a9ff;
  }
`;

export const ValueField = styled.span`
  width: 100%;
  height: 36px;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  color: #53a9ff;
`;
export const Key = styled.button`
  border: 3px solid #53a9ff;
  background-color: #fff;
  width: 5.91vh;
  height: 5.91vh;
  margin: 1.4vh;
  border-radius: 5.91vh;
  text-align: center;
  vertical-align: center;
  outline: none;
  font-size: 1.3em;
  color: #53a9ff;
  font-weight: 600;
  :hover {
    color: #fff;
    background-color: #53a9ff;
  }
`;

