import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 3rem;
  height: 3rem;
  background-image: linear-gradient(180deg, #53a9ff, #328de8);
  border-radius: 100rem;
  font-size: 2em;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ color }) =>
    color === "red" &&
    css`
      background-image: linear-gradient(180deg, #ff5353, #de5959);
    `};
  ${({ color }) =>
    color === "purple" &&
    css`
      background-image: linear-gradient(180deg, #8053ff, #6f49db);
    `};
  ${({ color }) =>
    color === "blue" &&
    css`
      background-image: linear-gradient(180deg, #53a9ff, #328de8);
    `};

  ${({ active }) =>
    !!active &&
    css`
      width: 6em;
      height: 6em;
    `}
`;
