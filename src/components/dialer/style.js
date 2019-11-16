import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
export const KeyBox = styled.div`
  ${({ type }) =>
    type === "bigger" &&
    css`
      width: calc(10.71vh * 3);
      height: calc(10.71vh * 4);
    `}
  ${({ type }) =>
    type === "small" &&
    css`
      width: calc(8.71vh * 3);
      height: calc(8.71vh * 4);
    `}
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  & > svg {
    ${({ type }) =>
      type === "bigger" &&
      css`
        width: 7.91vh;
        height: 7.91vh;
      `}
    ${({ type }) =>
      type === "small" &&
      css`
        width: 5.91vh;
        height: 5.91vh;
      `}

    margin: 1.4vh;
    transform: scale(0.6);
    color: #53a9ff;
  }
`;

export const ValueField = styled.span`
  ${({ type }) =>
    type === "bigger" &&
    css`
      height: 25vh;
    `}
  ${({ type }) =>
    type === "small" &&
    css`
      height: 36px;
      border-radius: 9px;
    `}
  width: 100%;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #53a9ff;
`;
export const Key = styled.button`
  border: 3px solid #53a9ff;
  background-color: #fff;
  ${({ type }) =>
    type === "bigger" &&
    css`
      height: 7.91vh;
      width: 7.91vh;
    `}
  ${({ type }) =>
    type === "small" &&
    css`
      width: 5.91vh;
      height: 5.91vh;
    `}
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
